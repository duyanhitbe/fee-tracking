import moment from "moment";
import {Fee} from "@app/models/fee.model";
import connectDB from "@app/app/lib/connectDB";

export async function GET(request: Request) {
    await connectDB()
    const startOfMonth = moment().startOf('month').toDate();
    const endOfMonth = moment().endOf('month').toDate();

    const labels: string[] = [];
    const values: number[] = [];

    while (startOfMonth < endOfMonth) {
        const dayAfter = new Date(startOfMonth);
        dayAfter.setHours(23, 59, 59, 59);

        const label = moment(startOfMonth).format("DD/MM")
        labels.push(label);

        const [data] = await Fee.aggregate([
            {
                $match: {
                    $and: [
                        {
                            createdAt: {$gte: startOfMonth}
                        },
                        {
                            createdAt: {$lte: dayAfter}
                        },
                    ]
                }
            },
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$amount"
                    }
                }
            }
        ]);
        values.push(data?.total || 0);

        startOfMonth.setDate(startOfMonth.getDate() + 1);
    }

    return Response.json({
        labels,
        values
    })
}