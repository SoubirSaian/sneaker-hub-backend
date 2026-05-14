import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import CartServices from "./Cart.service";

const u = catchAsync(async (req, res) => {

    const result = await CartServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const CartController = { u };

export default CartController;