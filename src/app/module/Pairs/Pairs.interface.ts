import { Types } from "mongoose";

export interface IPairs {
    resellerId: Types.ObjectId;
    name: string;
    images: string;
    brand: string;
    quantity: string;
    details: string;
    variant: {
        gender: string;
        size: number;
    };
    askingPrice: number;
    // size: number;
    type: string;
    isVisibleToStore: boolean;
    isShowAskingPrice: boolean;
    isAllowDirectRequest: boolean;
    isSold: boolean;
    createdAt: Date;
}

export interface IPairRequest {
    resellerId: Types.ObjectId;
    retailerId: Types.ObjectId;
    pairId: Types.ObjectId;
    quantity: string;
    variant: {
        gender: string;
        size: number;
    };
    askingPrice: number;
    unitPrice: number;
    totalPrice: number;
    status: string;
    createdAt: Date;
}