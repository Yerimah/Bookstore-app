import React from 'react';
import Form from './Form';
import BookCard from './BookCards';

const Books = () => (
  <main>
    <BookCard />
    <h2 className="add-book">ADD NEW BOOK</h2>
    <hr />
    <Form />
  </main>
);

export default Books;
