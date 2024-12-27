import React from 'react';
import { Link } from 'react-router-dom';

function BookItem({book, handleDelete}){

    return (
        <div className="card-container">
            <img
                src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
                alt="Books"
                height="200"
            />
            <div className="desc">
                <h2>
                    <p>{book.bookTitle}</p>
                    <Link to={`/book/${book._id}`}>Click for details</Link>
                </h2>
                <h3>{book.bookAuthor}</h3>
                <div className='same-line'>
                    <p>{book.bookDescription}</p>
                    <button onClick={() => handleDelete(book._id)}>X</button>
                </div>
                
            </div>
        </div>
    )

}

export default BookItem;