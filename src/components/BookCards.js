import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBook, removeBook } from '../redux/books/books';
import StatusIcon from '../../src/Images/status-icon.png';

const BookCard = () => {
  const bookState = useSelector((state) => state.booksReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  const removeHandler = (e) => {
    dispatch(removeBook(e.target.id));
  };

  //   if (bookState !== []) {
  return (
    <>
      {bookState.map((book) => (
        <div key={book.item_id} className="book-card">
          <div className="book-info">
            <span className="book-category">{book.category}</span>
            <h2 className="title">{book.title}</h2>
            <span className="author">DANIEL YERIMAH</span>
            <div className="container">
              <ul className="utils">
                <li>
                  <button id={book.item_id} className="btn border-right" type="button">
                    Comments
                  </button>
                </li>
                <li>
                  <button id={book.item_id} className="btn border-right" type="button" onClick={removeHandler}>
                    Remove
                  </button>
                </li>
                <li>
                  <button id={book.item_id} className="btn" type="button">
                    Edit
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="progress">
          <img className='progress-icon' src={StatusIcon} alt="circular status icon" />
            <div className='metrics'>  
            <span className="percent">64%</span>
            <span className="state">completed</span>
            </div>
          </div>
          <div className="view-progress">
            <span className="cur-chapter">CURRENT CHAPTER</span>
            <h3 className="bookchapter">Chapter 5</h3>
            <button className="update-btn" id={book.item_id} type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      ))}
    </>
  );
};
//   return (<h2>No books added yet</h2>);
// };

export default BookCard;
