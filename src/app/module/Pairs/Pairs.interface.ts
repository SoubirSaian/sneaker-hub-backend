import { Types } from "mongoose";

export interface IPairs {
    resellerId: Types.ObjectId;
    name: string;
    images: string;
    brand: string;
    quantity: string;
    details: string;
    gender: string;
    askingPrice: number;
    size: number;
    type: string;
    isVisibleToStore: boolean;
    isShowAskingPrice: boolean;
    isAllowDirectRequest: boolean;
    createdAt: Date;
}