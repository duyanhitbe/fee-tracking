import {Fee} from "@app/models/fee.model";

export async function GET(request: Request) {
    const month = new Date().getMonth() + 1;
    const [data] = await Fee.aggregate([
        {
            $addFields: {
                month: {
                    $month: "$createdAt"
                }
            }
        },
        {
            $match: {
                month
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
    ])
    return Response.json({total: data?.total || 0})
}