const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  bookNumber: {
    type: Number,
    required: true
  },
  bookName: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
var book = mongoose.model("book", BookSchema);


module.exports = mongoose.model('Book', BookSchema);