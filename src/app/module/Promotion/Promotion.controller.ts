import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PromotionServices from "./Promotion.service";

const u = catchAsync(async (req, res) => {

    const result = await PromotionServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const PromotionController = { u };

export default PromotionController;