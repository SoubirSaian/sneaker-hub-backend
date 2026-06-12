import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import OrderValidations from "./Order.validation";
import OrderController from "./Order.controller";


const OrderRouter = express.Router();

OrderRouter.get(
    "retailer-order-stat",
    authorizeUser,
    OrderController.getRetailerHomePageOrderStatDataController
);

OrderRouter.get(
    "get-order-detail/:id",
    // authorizeUser,
    OrderController.getOrderDetailController
);


export default OrderRouter;