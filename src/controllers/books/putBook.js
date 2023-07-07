const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      {
        author: req.body.author,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
      },
      { new: true }
    ).populate("author");

    if (!updatedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
