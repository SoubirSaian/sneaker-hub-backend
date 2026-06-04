import ApiError from "../../../error/ApiError";
import { IJwtPayload } from "../../../interface/jwt.interface";
import { ENUM_CART_STATUS } from "../../../utilities/enum";
import {ProductModel} from "../Product/Product.model";
import { ICart, TCartItem } from "./Cart.interface";
import CartModel from "./Cart.model";

const addToCartService = async (userDetails: IJwtPayload, payload: TCartItem) => {

    const { profileId } = userDetails;

    const { retailerId, productId, quantity, unitPrice, selectedSize } = payload;

    // Check if the product is already in the cart
    const existingCartItem = await CartModel.findOne({ buyerId: profileId, retailerId, productId });

    if (existingCartItem) {
        throw new ApiError(400, "This product is already in your cart.");
    }

    // Fetch product details to get unit price and available sizes
    // Assuming you have a ProductModel to fetch product details
    // const productDetails = await ProductModel.findById(productId);

    // if (!productDetails) {
    //     throw new ApiError(404, "Product not found.");
    // }

    // const unitPrice = productDetails.price; // Assuming price is a field in product details
    // const selectedSize = payload.selectedSize; // Assuming selected size is passed in payload
    const totalPrice = unitPrice * quantity;

    // Create a new cart item
    const newCartItem = await CartModel.create({
        buyerId: profileId,
        retailerId,
        productId,
        // unitPrice,
        quantity,
        totalPrice,
        selectedSize,
    });

    if(!newCartItem){
        throw new ApiError(500, "Failed to add product to cart.");
    }
    
    return null;

};

const deleteCartItemService = async (userDetails: IJwtPayload, cartItemId: string) => {

    const { profileId } = userDetails;

    const cartItem = await CartModel.findOne({ _id: cartItemId, buyerId: profileId });

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found.");
    }

    await CartModel.deleteOne({ _id: cartItemId });

    return null;

};

const increaseCartItemQuantityService = async (userDetails: IJwtPayload, cartItemId: string) => {

    const { profileId } = userDetails;

    const cartItem = await CartModel.findOne({ _id: cartItemId, buyerId: profileId });

    if (!cartItem) {
        throw new ApiError(404, "Cart item not found to increase quantity.");
    }

    cartItem.quantity += 1;
    cartItem.totalPrice = cartItem.unitPrice * cartItem.quantity;

    await cartItem.save();

    return null;

};

const applypromoCodeService = async (userDetails: IJwtPayload, query: Record<string, unknown>) => {

    const { profileId } = userDetails;

    let totalPriceSum = 0;

    // Validate promo code and calculate discount
    
    // This is a placeholder implementation, you should replace it with your actual promo code validation logic
    const discountpercent = 10; // Assuming a flat $10 discount for demonstration

    // Fetch all cart items for the user
    const cartItems = await CartModel.find({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE });

    if (cartItems.length === 0) {
        throw new ApiError(400, "No items in the cart to apply promo code.");
    }

    // Apply discount to all totalPrice at a time, you can modify this logic to apply discount based on your requirements
    for (const item of cartItems) {
        totalPriceSum += item.totalPrice;
    }

    const discountedTotalPrice = totalPriceSum - (totalPriceSum * discountpercent / 100);

    return  discountedTotalPrice ;

}

const placeOrderFromCartService = async (userDetails: IJwtPayload,payload: {totalPrice: number,shippingFee: number}) => {

    const { profileId } = userDetails;

    // Fetch all cart items for the user
    const cartItems = await CartModel.find({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE });

    if (cartItems.length === 0) {
        throw new ApiError(400, "No items in the cart to place an order.");
    }

    // Here you can implement the logic to create orders based on the cart items
    // For example, you can loop through the cart items and create an order for each item or group them into a single order

    // After placing the order(s), you can update the cart items' status to "Ordered" or remove them from the cart
    await CartModel.updateMany({ buyerId: profileId, status: ENUM_CART_STATUS.ACTIVE }, { status: ENUM_CART_STATUS.ORDERED });  

    return null;

}

const CartServices = { 
    addToCartService,
    deleteCartItemService,
    increaseCartItemQuantityService,
    applypromoCodeService,
    placeOrderFromCartService
};

export default CartServices;