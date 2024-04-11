import connectDB from "@app/app/lib/connectDB";
import {Fee} from "@app/models/fee.model";
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    await connectDB();
    const searchParams = request.nextUrl.searchParams
    let startDate = new Date();
    const query = searchParams.get("startDate");
    if (query) {
        startDate = new Date(query);
    }
    const endDate = new Date(startDate);
    endDate.setHours(23,59,59,59);
    const fees = await Fee.aggregate([
        {
            $match: {
                $and: [
                    {
                        createdAt: {
                            $gte: startDate
                        }
                    },
                    {
                        createdAt: {
                            $lte: endDate
                        }
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
    ])
    return Response.json(fees)
}