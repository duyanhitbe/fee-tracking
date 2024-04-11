import connectDB from "@app/app/lib/connectDB";
import moment from "moment/moment";
import {Fee} from "@app/models/fee.model";
import {randomString} from "@app/helpers/random";

export async function GET(request: Request) {
    await connectDB()
    const startOfMonth = moment().startOf('month').toDate();
    const endOfMonth = moment().endOf('month').toDate();

    const result: any[] = [];

    while (endOfMonth > startOfMonth) {
        const dayBefore = new Date(endOfMonth);
        dayBefore.setHours(0,0,0,0);

        const [data] = await Fee.aggregate([
            {
                $match: {
                    $and: [
                        {
                            createdAt: {$gte: dayBefore}
                        },
                        {
                            createdAt: {$lte: endOfMonth}
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
        if (data) {
            result.push({
                id: randomString(10),
                date: new Date(dayBefore),
                amount: data.total || 0
            })
        }

        endOfMonth.setDate(endOfMonth.getDate() - 1);
    }

    return Response.json(result)
}