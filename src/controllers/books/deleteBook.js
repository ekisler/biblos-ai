const express = require("express");
const router = express.Router();
const Book = require("../../models/book");

router.delete("/:id", async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Libro no encontrado" });
    }
    res.json({ message: "Libro eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
