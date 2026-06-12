import { z } from "zod";

        
const addNewProductValidation = z.object({
    body: z.object({
        name: z.string().min(1,"Product name is required"),
        type: z.enum(["Clothing","Sneakers"]),
        
    }),
});

const ProductValidations = { 
    addNewProductValidation
 };

export default ProductValidations;