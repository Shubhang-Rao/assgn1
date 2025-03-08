import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: true,
        unique: true
    },
    product_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
},
    { timestamps: true });

export const Product = mongoose.model("Product", productSchema);