import { Types } from "mongoose";

export interface IPromotion {
    retailerID: Types.ObjectId;
    type: string;
    // username?: string;
    title: string;
    content: string;
    recepient: string;
    sendMethod: string;
    status: string;
    scheduledAt?: Date;
    duration: number;
    isActive: boolean;
    createdAt: Date;
}