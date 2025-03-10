import mongoose from "mongoose";

const orderItems = new mongoose.Schema({
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
});

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        required: true,
        unique: true
    },

    order_det: {
        customer_det: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Customer"
        },
        date_of_delivery: {
            type: String,
            required: true
        }
    },

    products: {
        type: [orderItems]
    },

    order_price: {
        type: Number,
        required: true
    },

    order_status : {
        type: String,
        enum : ["PENDING","CANCELLED","DELIVERED"],
        default : "PENDING"
    }
},
    { timestamps: true });

export const Order = mongoose.model('Order', OrderSchema);