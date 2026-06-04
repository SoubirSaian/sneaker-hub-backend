import { z } from "zod";

        
const addToWishListValidation = z.object({
    query: z.object({
        productId: z.string().length(24, "Invalid product ID"),
        retailerId: z.string().length(24, "Invalid retailer ID")
    }),
});

const EngagementValidations = { 
    addToWishListValidation 
};

export default EngagementValidations;