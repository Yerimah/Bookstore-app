import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
    category: '',
  });

  const changeHandler = (e) => {
    setInputText({
      ...inputText, [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: inputText.title,
      author: inputText.author,
      category: inputText.category,
    };

    dispatch(addBook(newBook));
    setInputText({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <form className="addform" onSubmit={submitHandler}>
      <input 
      className="input-title"
      name="title" 
      type="text" 
      placeholder="Book title" 
      value={inputText.title} 
      onChange={changeHandler} />
      {/* <input name="author" type="text" placeholder="Author" value={inputText.author} onChange={changeHandler} /> */}
      <select 
      className="category-input"
      name="category" 
      onChange={changeHandler} 
      value={inputText.category}>
        
        <option value="" hidden>Category</option>
        <option value="Motivation">Motivation</option>
        <option name="Action">Action</option>
        <option value="Fiction">Fiction</option>
        <option value="Thriller">Thriller</option>
        <option value="Inspiration">Inspiration</option>
      </select>

      <button className="add-btn" value="Add book" type="submit">Add Book</button>
    </form>
  );
};

export default Form;
