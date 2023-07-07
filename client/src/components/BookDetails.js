import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Nav from "./Nav/Nav";
import BookCard from "./BookCard";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`http://localhost:8010/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!book) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Nav />
      <h1>Detalles del Libro</h1>
      <BookCard book={book} />
    </div>
  );
}

export default BookDetails;
