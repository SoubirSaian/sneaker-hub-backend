import { Types } from "mongoose";

export interface ISubscriptionPlan {
    title: string;
    price: number;
    features: string[];
    duration: string;
    createdAt: Date;
}

export interface IPayment {
    user: Types.ObjectId;
    couple: Types.ObjectId;
    subscription?:{
        id: Types.ObjectId
        planName: string;
        planPrice: number;
        startDate: Date,
        expireDate: Date,
    };
    paymentId?: string;
    createdAt: Date
}

// export interface IPayment {
//     orderId: Types.ObjectId;

//     buyerId: Types.ObjectId;

//     amount: number;

//     gateway:
//         | "STRIPE"
//         | "SSL_COMMERZ"
//         | "BKASH";

//     transactionId: string;

//     status:
//         | "PENDING"
//         | "SUCCESS"
//         | "FAILED";

//     gatewayResponse?: any;
// }