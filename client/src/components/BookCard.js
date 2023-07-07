import React from "react";

function BookCard({ book }) {
  console.log(book);
  if (!book) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>
        {book.title}
        <h3>
          {book.author.firstName} {book.author.lastName}
        </h3>
        <p>{book.name}</p>
        <p>{book.description}</p>
      </h2>
      <img src={book.image} alt="Book Cover" />
      {/* Agrega más propiedades del libro aquí */}
    </div>
  );
}

export default BookCard;
