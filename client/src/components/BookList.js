import React from "react";
import { gql, useQuery } from "@apollo/client";

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <ul id="book-list">
        {data.books.map((book) => {
          return (
            <li key={book.id}>
              {book.name} || {book.id}
            </li>
          );
        })}
        <li>Book Name</li>
      </ul>
    </div>
  );
};

export default BookList;
