const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

router.post("/", async (req, res) => {
  const book = new Book({
    author: req.body.author,
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
