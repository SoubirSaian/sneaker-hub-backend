import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import EngagementServices from "./Engagement.service";

const u = catchAsync(async (req, res) => {

    const result = await EngagementServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const EngagementController = { u };

export default EngagementController;