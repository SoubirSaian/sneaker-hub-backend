import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import BuyerServices from "./Buyer.service";

const setBuyerNotificationAlertsController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.setBuyerNotificationAlerts(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Notification alerts set successfully",
        data: result,
    });
});

const addSelectedShoeSizeController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.addSelectedShoeSize(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Selected shoe sizes added successfully",
        data: result,
    });
});

const addBrandsOfInterestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.addBrandsOfInterest(user, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Brands of interest added successfully",
        data: result,
    });
});

const getBuyersInterestsDataController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.getBuyersInterestsData(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Buyer interests data retrieved successfully",
        data: result,
    });
});

const updateBuyerProfileController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await BuyerServices.updateBuyerProfileService(user,req.file, req.body);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Buyer profile updated successfully",
        data: result,
    });
});

const BuyerController = { 
    setBuyerNotificationAlertsController,
    addSelectedShoeSizeController,
    addBrandsOfInterestController,
    getBuyersInterestsDataController,
    updateBuyerProfileController
};


export default BuyerController;