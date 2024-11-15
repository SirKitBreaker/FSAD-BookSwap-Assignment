import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    category: String,
    image: String,
    title: String,
    bookOwner: String,
    price: Number,
    contact: Number,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;