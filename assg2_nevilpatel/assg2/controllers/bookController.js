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
  addBookView: (req, res) => {
    res.render("addBook");
  },
  addBook: (req, res) => {
    Books.find({}).lean().then((allBooks) => {
      const bookNumber = allBooks.length + 1;
      Books.create({
        bookNumber,
        bookName: req.body.bookName,
        author: req.body.authorName,
        link: req.body.amazonLink
      }).then(() => {
        res.redirect('/home');
      }).catch(() => {
        res.status(httpStatus.EXPECTATION_FAILED).send("Something went wrong!");
      })
    });
  },
  deleteBookView: (req, res) => {
    Books.find().lean().then((books) => {
      res.render('deleteBooks', { books });
    }).catch(() => {
      res.status(httpStatus.EXPECTATION_FAILED).send("Something went wrong!");
    })
  },
  deleteBook: (req, res) => {
    Books.deleteOne({ bookNumber: req.params.bookNumber }).then(() => {
      res.redirect('/DeleteABook');
    }).catch(() => {
      res.status(httpStatus.EXPECTATION_FAILED).send("Something went wrong!");
    })
  },
};
