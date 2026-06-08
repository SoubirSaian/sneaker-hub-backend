import { z } from "zod";

        
const addnewPairValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        // images: z.string().min(1, "At least one image URL is required"),
        brand: z.string().min(1, "Brand is required"),
        quantity: z.number().min(1, "Quantity is required"),
        details: z.string().optional(),
        variant: z.object({ 
            gender: z.string().min(1, "Gender is required"),
            size: z.number().min(0, "Size must be a positive number")
        }),
        askingPrice: z.number().min(0, "Asking price must be a positive number"),
        type: z.enum(["New", "Never worn", "Worn once", "Worn few times", "Used - Good condition", "Used - Fair condition"]).optional(),
        isVisibleToStore: z.boolean().optional(),
        isShowAskingPrice: z.boolean().optional(),
        isAllowDirectRequest: z.boolean().optional(),
    }),
});

const makeRequestForPairValidationSchema = z.object({
    body: z.object({
        pairId: z.string().min(24, "Pair ID is required"),
        quantity: z.number().min(1, "Quantity is required").optional(),
        variant: z.object({
            gender: z.string().min(1, "Gender is required"),
            size: z.number().min(0, "Size must be a positive number")
        }).optional(),
        askingPrice: z.number().min(1, "Asking price must be a positive number").optional(),
        offerPrice: z.number().min(1, "Offer price must be a positive number"),
        validityHours: z.number().min(1, "Validity hours is required"),
        note: z.string().optional(),
        dealCompletionType: z.enum(["Immediate", "Negotiable"]).optional(),
    }),
});



const PairsValidations = { 
    addnewPairValidationSchema,
    makeRequestForPairValidationSchema
 };

export default PairsValidations;