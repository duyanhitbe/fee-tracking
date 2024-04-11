import connectDB from "@app/app/lib/connectDB";
import {Fee} from "@app/models/fee.model";
import {Tag} from "@app/models/tag.model";

export const dynamic = 'force-dynamic' // defaults to auto

/** Get list fees */
export async function GET(request: Request) {
    await connectDB();
    const fees = await Fee.aggregate([
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
    const tag = await Tag.findById(tagId);
    if (!tag) {
        return Response.json({message: 'invalid payload'}, {status: 400})
    }
    body.amount = Math.abs(amount);
    if (tag._doc.type === 'SPEND') {
        body.amount*=-1;
    }
    const fee = await Fee.create(body);
    fee.tag = tag;
    return Response.json(fee)
}