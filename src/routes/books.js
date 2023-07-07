const express = require("express");
const router = express.Router();
const getBook = require("../controllers/books/getBook");
const getBookById = require("../controllers/books/getBookById");
const postBook = require("../controllers/books/postBook");
const putBook = require("../controllers/books/putBook");
const deleteBook = require("../controllers/books/deleteBook");

router.get("/", getBook);
router.get("/:id", getBookById);
router.post("/", postBook);
router.put("/:id", putBook);
router.delete("/:id", deleteBook);

module.exports = router;
