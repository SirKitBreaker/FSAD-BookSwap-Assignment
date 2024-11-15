import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    userid: String,
    name: String,
    address: String,
    email: String,
    status: String,
    pincode: Number,
    mobile: Number,
    totalamount: Number,
    cart: Array,
    createdat: {
        type: Date,
        default: Date.now,
    },
    lastupdatedat: {
        type: Date,
        default: Date.now,
    },
});
const Order = mongoose.model("Order", orderSchema);

export default Order;