const express = require("express");
const router = express.Router();
const Author = require("../../models/author");

router.post("/", async (req, res) => {
  const author = new Author({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photo: req.body.photo,
  });

  try {
    const newAuthor = await author.save();
    res.status(201).json(newAuthor);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
