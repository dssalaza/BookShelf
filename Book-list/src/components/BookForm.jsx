import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addBook, getBookById, updateBook } from "../api-service/service";

function BookForm() {
  const history = useNavigate();
  const { bookId } = useParams();

  useEffect(() => {
    if (bookId) {
      getBookById(bookId)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [bookId]);

  const [formData, setFormData] = useState({
    bookTitle: "",
    bookAuthor: "",
    bookDescription: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookId) {
      updateBook(bookId, formData)
        .then(() => {
          history("/");
        })
        .catch((error) => console.log(error));
    } else {
      addBook(formData)
        .then(() => {
          history("/");
        })
        .catch((error) => console.log(error));
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br />
            <Link to="/" className="btn btn-info float-left">
              Show Book List
            </Link>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form onSubmit={handleSubmit}>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="bookTitle"
                  class="form-control"
                  value={formData.bookTitle}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInput}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="bookAuthor"
                  class="form-control"
                  value={formData.bookAuthor}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInput}
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="bookDescription"
                  class="form-control"
                  value={formData.bookDescription}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={handleInput}
                />
              </div>
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookForm;
