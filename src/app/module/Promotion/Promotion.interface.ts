import { Types } from "mongoose";

export interface IPromotion {
    retaileriD: Types.ObjectId;
    type: string;
    username?: string;
    title: string;
    content: string;
    receiver: string;
    sendMethod: string;
    createdAt: Date;
}