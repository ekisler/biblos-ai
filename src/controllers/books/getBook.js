const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

// Ruta para obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().populate("author");
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
