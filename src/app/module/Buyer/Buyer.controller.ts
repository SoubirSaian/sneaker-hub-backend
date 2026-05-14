import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import BuyerServices from "./Buyer.service";

const u = catchAsync(async (req, res) => {

    const result = await BuyerServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const BuyerController = { u };

export default BuyerController;