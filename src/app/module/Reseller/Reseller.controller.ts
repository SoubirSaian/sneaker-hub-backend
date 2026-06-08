import { AuthRequest } from "../../../interface/authRequest";
import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ResellerServices from "./Reseller.service";

const resellerHomePageStatDataController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ResellerServices.resellerHomePageStatDataService(user);

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Reseller home page stat data fetched successfully",
        data: result,
    });
});

const proposeAnOfferToResellerForPairRequestController = catchAsync(async (req, res) => {

    const { user } = req as AuthRequest;

    const result = await ResellerServices.makeRequestForPairService(user, req.body);

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Pair request submitted successfully",
        data: result,
    });
});

const ResellerController = { 
    resellerHomePageStatDataController,
    proposeAnOfferToResellerForPairRequestController
 };

export default ResellerController;