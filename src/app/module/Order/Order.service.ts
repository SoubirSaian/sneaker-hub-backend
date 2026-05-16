import { stat } from "fs";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IOrder, TOrderPayload } from "./Order.interface";
import {OrderItemModel, OrderModel, SellerSplitOrderModel} from "./Order.model";
import { ENUM_ORDER_STATUS, ENUM_ORDER_TYPE } from "../../../utilities/enum";
import mongoose from "mongoose";
import {ProductModel} from "../Product/Product.model";
import { PaymentModel } from "../Payment/Payment.model";
import { completeOrderAfterPayment } from "../Payment/PaymentSuccess.service";

const placeNewOrderService = async (userDetails:IJwtPayload,payload: TOrderPayload) => {

    const { profileId } = userDetails;

    const { retailerId, productId,orderType, selectedSize, quantity, unitPrice, pickupTime } = payload;

    const newOrder = await OrderModel.create({
        buyerId: profileId,
        retailerId,
        status: orderType === ENUM_ORDER_TYPE.HOLD ? ENUM_ORDER_STATUS.HOLDING : ENUM_ORDER_STATUS.PLACED,
        type: orderType,
        productId,
        selectedSize,
        quantity,
        unitPrice,
        totalPrice: unitPrice * quantity,
        pickupTime
    });

    if(!newOrder){
        throw new ApiError(500, "Failed to place the order.");
    }

    return null;

};

// buy-now.service.ts

interface BuyNowPayload {

    buyerId: string;

    productId: string;

    retailerId: string;

    selectedSize: number;

    quantity: number;

    paymentMethod:
        | "STRIPE"
        | "SSL_COMMERZ"
        | "BKASH"
        | "COD";

    shippingAddress: {
        name: string;
        phone: string;
        address: string;
        city: string;
        area?: string;
    };
}

const buyNowService = async (
    payload: BuyNowPayload
) => {

    const session = await mongoose.startSession();

    try {

        session.startTransaction();

        // =====================================================
        // 1. GET PRODUCT
        // =====================================================

        const product: any =
            await ProductModel.findById(
                payload.productId
            ).session(session);

        if (!product) {
            throw new Error("Product not found");
        }

        // =====================================================
        // 2. VALIDATE SIZE
        // =====================================================

        const sizeVariant = product.sizes.find(
            (s: any) =>
                s.size === payload.selectedSize
        );

        if (!sizeVariant) {
            throw new Error("Selected size unavailable");
        }

        // =====================================================
        // 3. VALIDATE STOCK
        // =====================================================

        if (
            sizeVariant.stock < payload.quantity
        ) {
            throw new Error("Insufficient stock");
        }

        // =====================================================
        // 4. CALCULATE PRICE
        // =====================================================

        const unitPrice = product.price;

        const subtotal =
            unitPrice * payload.quantity;

        const shippingCharge = 100;

        const discountAmount = 0;

        const totalAmount =
            subtotal +
            shippingCharge -
            discountAmount;

        // =====================================================
        // 5. CREATE ORDER
        // =====================================================

        const order = await OrderModel.create([{

            buyerId: payload.buyerId,

            orderNumber: `ORD-${Date.now()}`,

            subtotal,

            shippingCharge,

            discountAmount,

            totalAmount,

            totalItems: payload.quantity,

            paymentStatus: "PENDING",

            orderStatus: "PLACED",

            paymentMethod:
                payload.paymentMethod,

            shippingAddress:
                payload.shippingAddress,

        }], { session });

        const createdOrder = order[0];

        // =====================================================
        // 6. CREATE ORDER ITEM
        // =====================================================

        await OrderItemModel.create([{

            orderId: createdOrder._id,

            buyerId: payload.buyerId,

            retailerId: payload.retailerId,

            productId: payload.productId,

            productSnapshot: {
                name: product.name,
                image: product.image,
                brand: product.brand,
            },

            selectedSize:
                payload.selectedSize,

            quantity: payload.quantity,

            unitPrice,

            totalPrice: subtotal,

            status: "PLACED",

        }], { session });

        // =====================================================
        // 7. CREATE SELLER SPLIT ORDER
        // =====================================================

        await SellerSplitOrderModel.create([{

            orderId: createdOrder._id,

            retailerId: payload.retailerId,

            buyerId: payload.buyerId,

            totalItems: payload.quantity,

            totalAmount: subtotal,

            status: "PLACED",

        }], { session });

        // =====================================================
        // 8. CREATE PAYMENT
        // =====================================================

        const payment = await PaymentModel.create([{

            orderId: createdOrder._id,

            buyerId: payload.buyerId,

            amount: totalAmount,

            gateway: payload.paymentMethod,

            transactionId:
                `TXN-${Date.now()}`,

            status:
                payload.paymentMethod === "COD"
                    ? "SUCCESS"
                    : "PENDING",

        }], { session });

        // =====================================================
        // 9. COD DIRECT COMPLETE
        // =====================================================

        if (
            payload.paymentMethod === "COD"
        ) {

            await completeOrderAfterPayment({
                orderId:
                    createdOrder._id.toString(),

                transactionId:
                    payment[0].transactionId,

                session,
            });
        }

        await session.commitTransaction();

        return {

            success: true,

            message:
                "Buy now checkout successful",

            data: {

                order: createdOrder,

                payment: payment[0],
            }
        };

    } catch (error: any) {

        await session.abortTransaction();

        throw new Error(error.message);

    } finally {

        session.endSession();
    }
};


const OrderServices = { 
    placeNewOrderService,
 };

export default OrderServices;