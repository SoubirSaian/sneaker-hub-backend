import { CANCELLED } from "dns"

export const ENUM_USER_Type = {
    BUYER: "Buyer",
    RETAILER: "Retailer",
    RESELLER: "Reseller",
   
}

export const ENUM_ORDER_TYPE = {
    BUY_NOW: "Buy Now",
    HOLD: "Hold",
    
}

export const ENUM_SUBSCRIPTION_TYPE = {
    SOLO: "Solo",
    COUPLE: "Couple"
}

export const ENUM_ORDER_STATUS = {
    HOLDING: "Holding",
    PLACED: "Placed",
    ACCEPTED: "Accepted",
    READY_FOR_PICKUP: "Ready for Pickup",
    ON_THE_WAY: "On the Way",
    REJECTED: "Rejected",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    PROCESSING: "Processing",
}

export const ENUM_ORDER_ITEM_STATUS = {
    HOLDING: "Holding",
    PLACED: "Placed",
    SHIPPED: "Shipped",
     DELIVERED: "Delivered",
    REJECTED: "Rejected",
    COMPLETED: "Completed",
    CANCELLED: "Cancelled",
    PROCESSING: "Processing",
}

export const ENUM_SELLER_SPLIT_ORDER_STATUS = {
    PLACED: "Placed",
    PROCESSING: "Processing",
    SHIPPED: "Shipped",
    DELIVERED: "Delivered",
}

export const ENUM_CART_STATUS = {
    ACTIVE: "Active",
    ORDERED: "Ordered",
    REMOVED: "Removed"
}

export const ENUM_PAYMENT_STATUS = {
   PENDING: "Pending",
   PAID: "Paid",
   FAILED: "Failed",
   REFUNDED: "Refunded",
}

export const ENUM_PAYMENT_METHOD = {
    STRIPE: "Stripe",
    PAYPAL: "PayPal",
    CREDIT_CARD: "Credit Card",
}

export const ENUM_NOTIFICATION_TYPE = {
    NEW_ORDER : "NEW_ORDER",
    ORDER_ACCEPTED : "ORDER_ACCEPTED",
    ORDER_ON_THE_WAY : "ORDER_ON_THE_WAY",
    ORDER_COMPLETED : "ORDER_COMPLETED",
    ORDER_CONFIRMED : "ORDER_CONFIRMED",
    ORDER_REJECTED : "ORDER_REJECTED",
    ORDER_CANCELLED : "ORDER_CANCELLED",
    PAYMENT_RECEIVED : "PAYMENT_RECEIVED",
    PAYMENT_COMPLETED : "PAYMENT_COMPLETED",
    PAYMENT_FAILED : "PAYMENT_FAILED",
    // SYSTEM_ALERT : "SYSTEM_ALERT"
}

export const ENUM_CONNECTION_ENDING_REASON = {
    ACTIVE : "Active",
    GRATUATED : "Gratuated",
    TIMEOUT : "Timeout",
    USER_CANCELED : "User_Canceled",
    AUTO_ENDED_FROM_OTHER_GRADUATION : "Auto_Ended_From_Other_Graduation",
}



