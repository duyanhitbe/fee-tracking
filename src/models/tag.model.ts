import * as mongoose from "mongoose";

export type ITag = mongoose.Document & {
    icon: string;
    title: string;
    type: string;
}

export const tagSchema = new mongoose.Schema<ITag>({
    icon: {type: String, required: true},
    title: {type: String, required: true},
    type: {type: String, default: 'SPEND'},
}, {versionKey: false, timestamps: true})

export const Tag = mongoose.models.Tag || mongoose.model<ITag>('Tag', tagSchema);