import connectDB from "@app/app/lib/connectDB";
import {Fee} from "@app/models/fee.model";
import {Tag} from "@app/models/tag.model";

export const dynamic = 'force-dynamic' // defaults to auto

/** Get list fees today */
export async function GET(request: Request) {
    await connectDB();
    const startDate = new Date();
    startDate.setHours(0,0,0,0);
    const endDate = new Date();
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

/** Create new fee */
export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    const {amount, tagId} = body;
    if (!amount || !tagId) {
        return Response.json({message: 'invalid payload'}, {status: 400})
    }
    const fee = await Fee.create(body);
    fee.tag = await Tag.findById(tagId);
    return Response.json(fee)
}