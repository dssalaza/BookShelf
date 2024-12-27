import React, { useState, useEffect } from "react";
import { getAllBooks, deleteBook } from "../api-service/service";
import { Link } from "react-router-dom";
import BookCard from "./BookItem";

function ListOfBooks() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    getAllBooks()
      .then((res) => {
        console.log(res);
        setBooksList(res.data);
      })
      .catch((err) => {
        console.log("Error from BookList");
      });
  }, []);

  const handleDelete = (id) => {
    deleteBook(id)
      .then((response) => {
        console.log(response.data);
        setBooksList(booksList.filter((booksList) => booksList._id !== id));
        window.alert(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const bookList =
    booksList.length === 0
      ? "there is no book record!"
      : booksList.map((book, k) => (
          <BookCard book={book} key={k} handleDelete={handleDelete} />
        ));

  return (
    <div className="BookList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Books List</h2>
            <br />
          </div>

          <div className="col-md-11">
            <Link
              to="/create"
              className="btn btn-outline-warning float-right"
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className="list">{bookList}</div>
      </div>
    </div>
  );
}

export default ListOfBooks;
