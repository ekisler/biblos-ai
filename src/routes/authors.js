const express = require("express");
const router = express.Router();
const getAuthorRouter = require("../controllers/author/getAuthor");
const getAuthorById = require("../controllers/author/getAuthorById");
const postAuthor = require("../controllers/author/postAuthor");
const putAuthor = require("../controllers/author/putAuthor");
const deleteAuthor = require("../controllers/author/deleteAuthor");

router.use("/", getAuthorRouter);
router.get("/:id", getAuthorById);
router.post("/", postAuthor);
router.put("/:id", putAuthor);
router.delete("/:id", deleteAuthor);

module.exports = router;
