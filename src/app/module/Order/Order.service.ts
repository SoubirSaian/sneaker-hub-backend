import { stat } from "fs";
import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { IOrder, TOrderPayload } from "./Order.interface";
import OrderModel from "./Order.model";
import { ENUM_ORDER_STATUS, ENUM_ORDER_TYPE } from "../../../utilities/enum";

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

const OrderServices = { 
    placeNewOrderService,
 };

export default OrderServices;