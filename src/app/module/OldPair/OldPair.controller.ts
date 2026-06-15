import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import OldPairServices from "./OldPair.service";

const u = catchAsync(async (req, res) => {

    const result = await OldPairServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const OldPairController = { u };

export default OldPairController;