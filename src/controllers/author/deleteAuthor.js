const express = require("express");
const router = express.Router();
const Author = require("../../models/author");

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }
    res.json({ message: "Autor eliminado correctamente" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
