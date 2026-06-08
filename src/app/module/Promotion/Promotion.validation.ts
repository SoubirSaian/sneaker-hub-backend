import { resolveClientEndpointParameters } from "@aws-sdk/client-s3/dist-types/endpoint/EndpointParameters";
import { z } from "zod";
import { ENUM_PROMOTION_RECEIVER_TYPE, ENUM_PROMOTION_SEND_METHOD, ENUM_PROMOTION_TYPE } from "../../../utilities/enum";

        
const createNewPromotionValidation = z.object({
    body: z.object({
        title: z.string().min(1,"Title is required"),
        content: z.string().min(1,"Content is required"),
        type: z.nativeEnum(ENUM_PROMOTION_TYPE),
        recepient: z.nativeEnum(ENUM_PROMOTION_RECEIVER_TYPE),
        sendMethod: z.nativeEnum(ENUM_PROMOTION_SEND_METHOD),
        // type: z.enum(Object.values(ENUM_PROMOTION_TYPE) as [string, ...string[]]),
        // recepient: z.enum(Object.values(ENUM_PROMOTION_RECEIVER_TYPE) as [string, ...string[]]),
        // sendMethod: z.enum(Object.values(ENUM_PROMOTION_SEND_METHOD) as [string, ...string[]]),
    }),
});

const PromotionValidations = { 
    createNewPromotionValidation
 };

export default PromotionValidations;