import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import RetailerServices from "./Retailer.service";

const filterNearbyRetailersController = catchAsync(async (req, res) => {

    const result = await RetailerServices.filterNearbyRetailers(req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Nearby retailers retrieved successfully.",
        data: result,
    });
});

const getAllNearbyRetailerForMap = catchAsync(async (req, res) => {

    const result = await RetailerServices.getAllNearbyRetailersForMap(req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Nearby retailers for map retrieved successfully.",
        data: result,
    });
});

const getRetailerInventoryController = catchAsync(async (req, res) => {
    const { user } = req as AuthRequest;

    const result = await RetailerServices.getRetailerInventory(user,req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retailer inventory retrieved successfully.",
        data: result,
    });
});

const getRetailerAllOrdersController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await RetailerServices.getAllOrdersOfRetailer(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "All orders of the retailer retrieved successfully.",
        data: result,
    });
});

const toggleRetailerOperationHourController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await RetailerServices.toggleOperationHour(user, req.query);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Operation hour toggled successfully.",
        data: result,
    });
});

const RetailerController = { 
    filterNearbyRetailersController,
    getAllNearbyRetailerForMap,
    getRetailerInventoryController,
    getRetailerAllOrdersController,
    toggleRetailerOperationHourController
};

export default RetailerController;