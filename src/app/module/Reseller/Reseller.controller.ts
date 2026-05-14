import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ResellerServices from "./Reseller.service";

const u = catchAsync(async (req, res) => {

    const result = await ResellerServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const ResellerController = { u };

export default ResellerController;