import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import OrderServices from "./Order.service";

const u = catchAsync(async (req, res) => {

    const result = await OrderServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const OrderController = { u };

export default OrderController;