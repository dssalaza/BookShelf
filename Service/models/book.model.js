const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookTitle: { type: String, required: true },
  bookAuthor: { type: String, required: true },
  bookDescription: { type: String },
});

const Book = mongoose.model("300356922-david", bookSchema);
module.exports = Book;