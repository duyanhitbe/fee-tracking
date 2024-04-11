import moment from "moment";
import {Fee, IFee} from "@app/models/fee.model";
import connectDB from "@app/app/lib/connectDB";

export async function GET(request: Request) {
    await connectDB()
    const startOfMonth = moment().startOf('month').toDate();
    const endOfMonth = moment().endOf('month').toDate();

    const labelMap: Record<string, number> = {};

    while (startOfMonth < endOfMonth) {
        const dayAfter = new Date(startOfMonth);
        dayAfter.setHours(23, 59, 59, 59);

        const fees = await Fee.aggregate<IFee>([
            {
                $match: {
                    $and: [
                        {
                            createdAt: {$gte: startOfMonth}
                        },
                        {
                            createdAt: {$lte: dayAfter}
                        },
                        {
                            amount: {$lt: 0}
                        }
                    ]
                }
            },
            {
                $lookup: {
                    from: "tags",
                    localField: "tagId",
                    foreignField: "_id",
                    as: "tags"
                }
            },
            {
                $addFields: {
                    tag: {
                        $first: "$tags"
                    }
                }
            },
            {
                $project: {
                    tags: false
                }
            }
        ]).exec();

        for (const fee of fees) {
            if (!labelMap[`${fee.tag?.icon} ${fee.tag?.title}`]) {
                labelMap[`${fee.tag?.icon} ${fee.tag?.title}`] = fee.amount * -1;
            } else {
                labelMap[`${fee.tag?.icon} ${fee.tag?.title}`] += fee.amount * -1;
            }
        }

        startOfMonth.setDate(startOfMonth.getDate() + 1);
    }

    return Response.json({
        labels: Object.keys(labelMap),
        values: Object.values(labelMap)
    })
}