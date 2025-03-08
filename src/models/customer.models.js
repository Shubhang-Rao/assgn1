import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    customer_id: {
        type: String,
        required: true,
        unique: true
    },
    customer_name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
    ,
    contact_no: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);