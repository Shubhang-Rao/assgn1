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
    usernmae: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    address: {
        type: String,
        required: true
    }
    ,
    email: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    contact_no: {
        type: String,
        required: true
    }
},
    { timestamps: true }
);

export const Customer = mongoose.model("Customer", customerSchema);