import express from "express";
import {auth, authorizeUser} from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import RetailerValidations from "./Retailer.validation";
import RetailerController from "./Retailer.controller";


const RetailerRouter = express.Router();


RetailerRouter.get(
    "/get-nearby-retailers",
    validateRequest(RetailerValidations.validateLatLongTofilterNearbyRetailers),
    RetailerController.filterNearbyRetailersController
);

//buyer map page

RetailerRouter.get(
    "/get-nearby-retailer-map",
    validateRequest(RetailerValidations.validateLatLongTofilterNearbyRetailers),
    RetailerController.getAllNearbyRetailerForMap
);

//retailer inventory

RetailerRouter.get(
    "/get-retailer-inventory",
    authorizeUser,
    RetailerController.getRetailerInventoryController
);

//retailer order

RetailerRouter.get(
    "/get-retailer-order",
    authorizeUser,
    RetailerController.getRetailerAllOrdersController
);

RetailerRouter.post(
    "/toggle-retailer-operation-hour",
    authorizeUser,
    RetailerController.toggleRetailerOperationHourController
);



export default RetailerRouter;