const express = require("express");
const router = express.Router();
const Author = require("../../models/author");

router.put("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        photo: req.body.photo,
      },
      { new: true }
    );

    if (!updatedAuthor) {
      return res.status(404).json({ message: "Autor no encontrado" });
    }

    res.json(updatedAuthor);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
