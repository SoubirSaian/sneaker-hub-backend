import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ReportServices from "./Report.service";

const u = catchAsync(async (req, res) => {

    const result = await ReportServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const ReportController = { u };

export default ReportController;