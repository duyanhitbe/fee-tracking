import moment from "moment";
import {Fee} from "@app/models/fee.model";

export async function GET(request: Request) {
    const startOfWeek = moment().startOf('week').toDate();
    startOfWeek.setDate(startOfWeek.getDate() + 1)
    const endOfWeek = moment().endOf('week').toDate();
    endOfWeek.setDate(endOfWeek.getDate() + 1)

    const labels: string[] = [];
    const values: number[] = [];

    while (startOfWeek < endOfWeek) {
        const dayAfter = new Date(startOfWeek);
        dayAfter.setHours(23, 59, 59, 59);

        const label = moment(startOfWeek).format("DD/MM")
        labels.push(label);

        const [data] = await Fee.aggregate([
            {
                $match: {
                    $and: [
                        {
                            createdAt: {$gte: startOfWeek}
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

        startOfWeek.setDate(startOfWeek.getDate() + 1);
    }

    return Response.json({
        labels,
        values
    })
}