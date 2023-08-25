import React, { useState, useEffect } from 'react';
import BookData from '../../data/book';
import Book from './Book';

const BookList = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(BookData)
    }, []);

    return (
        <div className="container">
            <div className="text-center">All Books</div>
            <div className="row">
                {
                    books.map((book, index) => <Book data={book} key={index} />)
                }
            </div>
        </div>
    )
}
export default BookList;