import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import PairsServices from "./Pairs.service";

const u = catchAsync(async (req, res) => {

    const result = await PairsServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const PairsController = { u };

export default PairsController;