const router = require("express").Router();
let Book = require("../models/book.model");

// @description Get all books
router.route("/").get((req, res) => {
  Book.find()
    .then((allBooks) => res.json(allBooks))
    .catch((error) => res.status(400).json("There was an error: " + error));
});

// @description Get single book by id
router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((error) => res.status(404).json("No book found" + error));
});

// @description add/save book
router.route("/").post((req, res) => {
  const bookTitle = req.body.bookTitle;
  const bookAuthor = req.body.bookAuthor;
  const bookDescription = req.body.bookDescription;

  const newBook = new Book({
    bookTitle,
    bookAuthor,
    bookDescription,
  });

  newBook
    .save()
    .then(() => res.json("Book added successfuly"))
    .catch((error) => res.status(400).json("Error: " + error));
});

// @description update book by id
router.route("/:id").put((req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      book.bookTitle = req.body.bookTitle;
      book.bookAuthor = req.body.bookAuthor;
      book.bookDescription = req.body.bookDescription;
      book
        .save()
        .then(() => res.json("Book successfuly updated"))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
});

// @description delete book by id
router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted successfuly"))
    .catch((error) => res.status(400).json("Error: " + error));
});


// @description health endpoint
router.route("/health").get((req, res) => {
  res.status(200).json({ status: 'OK' });
});

module.exports = router;
