import React from 'react';
import './BookList.css';

const BookList = () => {
  const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Classic Fiction',
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Classic Fiction',
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian Fiction',
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Classic Fiction',
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Coming-of-Age Fiction',
  },
  {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fantasy',
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Dystopian Fiction',
  },
];


  return (
    <div>
      <h1>Book List</h1>
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={index} className="book-item">
            <h3 className="book-title">Title: {book.title}</h3>
            <p className="book-author">Author: {book.author}</p>
            <p className="book-genre">Genre: {book.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
