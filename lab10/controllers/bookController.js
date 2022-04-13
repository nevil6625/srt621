const Books = require('../models/book');
const httpStatus = require("http-status-codes");

module.exports = {
  getBooks: (req, res) => {
    Books.find().lean().then((books) => {
      res.render('home', { books });
    }).catch(() => {
      res.status(httpStatus.EXPECTATION_FAILED).send("Something went wrong!");
    })
  },
  getBook: (req, res) => {
    Books.findOne({ bookNumber: req.params.bookNumber }).lean().then((book) => {
      res.render('books', { book: book });
    }).catch(() => {
      res.status(httpStatus.EXPECTATION_FAILED).send("Something went wrong!");
    })
  },
};
