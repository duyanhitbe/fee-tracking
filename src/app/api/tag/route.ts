import connectDB from "@app/app/lib/connectDB";
import {Tag} from "@app/models/tag.model";

export const dynamic = 'force-dynamic' // defaults to auto

/** Get list tags */
export async function GET(request: Request) {
    await connectDB();
    const tags = await Tag.find();
    return Response.json(tags)
}

/** Create new tag */
export async function POST(request: Request) {
    await connectDB();
    const body = await request.json();
    const {title, icon} = body;
    if (!title || !icon) {
        return Response.json({message: 'invalid payload'}, {status: 400})
    }
    const tag = await Tag.create(body);
    return Response.json(tag)
}