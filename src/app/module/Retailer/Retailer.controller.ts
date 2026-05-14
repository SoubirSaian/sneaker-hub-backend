import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import RetailerServices from "./Retailer.service";

const u = catchAsync(async (req, res) => {

    const result = await RetailerServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const RetailerController = { u };

export default RetailerController;