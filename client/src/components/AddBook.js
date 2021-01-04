import React from "react";
import { gql, useQuery } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <form id="add-book">
      <div>
        <label>Book Name:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Genre:</label>
        <input type="text" />
      </div>

      <div className="field">
        <label>Author:</label>
        <select>
          <option>Select Author</option>
          {data.authors.map((author) => {
            return <option key={author.id}>{author.name}</option>;
          })}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
