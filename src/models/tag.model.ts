import * as mongoose from "mongoose";

export type ITag = mongoose.Document & {
    icon: string;
    title: string;
}

const tagSchema = new mongoose.Schema<ITag>({
    icon: {type: String, required: true},
    title: {type: String, required: true},
}, {versionKey: false, timestamps: true})

export const Tag = mongoose.models.Tag || mongoose.model<ITag>('Tag', tagSchema);