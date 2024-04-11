import * as mongoose from "mongoose";
import {ITag, tagSchema} from "@app/models/tag.model";

export type IFee = mongoose.Document & {
    tagId: mongoose.Schema.Types.ObjectId;
    tag?: ITag;
    amount: number;
}

export const feeSchema = new mongoose.Schema<IFee>({
    tagId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Tag'},
    tag: {type: tagSchema},
    amount: {type: Number, required: true},
}, {versionKey: false, timestamps: true})

export const Fee = mongoose.models.Fee || mongoose.model<IFee>('Fee', feeSchema);