import catchAsync from "../../../utilities/catchasync";
import sendResponse from "../../../utilities/sendResponse";
import ProductServices from "./Product.service";

const u = catchAsync(async (req, res) => {

    const result = await ProductServices.u();

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "P",
        data: result,
    });
});

const ProductController = { u };

export default ProductController;