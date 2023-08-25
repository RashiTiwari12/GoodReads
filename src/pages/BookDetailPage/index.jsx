import { useState, useEffect } from 'react';
import BookData from '../../data/book';
import React from 'react'
import Navbar from '../../components/Navbar';
import BookDetail from '../../components/BookDetail';
import { useParams } from 'react-router-dom';

const BookDetailPage = () => {
    const { id } = useParams()
    const [book, setBook] = useState({})

    useEffect(() => {
        setBook(BookData[id])
    });

    return (
        <>
            <Navbar />
            <BookDetail data={book} />
        </>
    )


}

export default BookDetailPage