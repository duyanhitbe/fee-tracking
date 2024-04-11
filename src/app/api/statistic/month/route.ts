import {Fee} from "@app/models/fee.model";
import connectDB from "@app/app/lib/connectDB";

export async function GET(request: Request) {
    await connectDB();
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
                month: new Date().getMonth() + 1
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