import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import EngagementServices from "./Engagement.service";

const followRetailerController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.followRetailerService(user, req.params.id);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Retailer followed successfully.",
        data: result,
    });
});

const unfollowRetailerController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.unfollowRetailerService(user, req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Retailer unfollowed successfully.",
        data: result,
    });
});

const addToWishlistController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.addToWishlistService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Product added to wishlist successfully.",
        data: result,
    });
});

const addToWantedlistController = catchAsync(async (req, res) => {

    // const { user } = req as AuthRequest;

    const result = await EngagementServices.addToWantedlistService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product marked as wanted successfully.",
        data: result,
    });
});

const removeFromWishlistController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.removeFromWishlistService(req.params.id);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Product removed from wishlist successfully.",
        data: result,
    });
});
const addReviewController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await EngagementServices.addReviewService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Review added successfully.",
        data: result,
    });
});

const EngagementController = { 
    followRetailerController,
    unfollowRetailerController,
    addToWishlistController,
    addToWantedlistController,
    removeFromWishlistController,
    addReviewController
};



export default EngagementController;