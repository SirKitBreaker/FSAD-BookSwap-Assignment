import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    userid: String,
    booktitle: String,
    bookimage: String,
    status: String,
    price: Number,
    contact: Number,
});
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;