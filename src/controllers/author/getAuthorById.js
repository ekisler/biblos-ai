const express = require("express");
const router = express.Router();
const Author = require("../../models/author");

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const author = await Author.findById(id);
    if (!author) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }
    res.json(author);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
