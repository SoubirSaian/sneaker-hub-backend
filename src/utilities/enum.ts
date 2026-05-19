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
    ACCEPTED: "Accepted",
    READY_FOR_PICKUP: "Ready for Pickup",
    ON_THE_WAY: "On the Way",
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
    NEW_PAIR_REQUEST : "NEW_PAIR_REQUEST",
    // SYSTEM_ALERT : "SYSTEM_ALERT"
}

export const ENUM_PRODUCT_AVAILABILITY = {
    ACTIVE : "Active",
    ON_HOLD : "On Hold",
    SOLD_OUT : "Sold Out",
    COMING_SOON : "Coming Soon",
    IN_STOCK : "In Stock",
     LOW_STOCK: "Low Stock",

}

export const ENUM_PROMOTION_TYPE = {
    fLASH_SALE : "Flash Sale",
    NEW_ARRIVALS : "New Arrivals",
    RESTOCK_ALERT : "Restock Alert",
    EXCLUSIVE_DROP : "Exclusive Drop",
    GENERAL_ANNOUNCEMENT : "General Announcement",

}
export const ENUM_PROMOTION_RECEIVER_TYPE = {
    ALL_MY_FOLLOWERS : "All My Followers",
    NEARBY_CUSTOMERS : "Nearby Customers",
    MY_SIZE_AUDIENCE : "My Size Audience",

}

export const ENUM_PROMOTION_SEND_METHOD = {
    SEND_NOW : "Send Now",
    SCHEDULED : "Scheduled",
    SAVE_DRAFT : "Save Draft",
}

export const ENUM_PAIR_REQUEST_STATUS = {
    ACCEPTED : "Accepted",
    REJECTED : "Rejected",
    PENDING : "Pending",
    COUNTER: "Counter",
    DECLINE: "Decline",
    COMPLETED: "Completed",
    DELIVEREd: "Delivered",
}



