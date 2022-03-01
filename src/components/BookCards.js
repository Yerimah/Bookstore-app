import React from 'react';

const BookCard = () => (
  <div className="book-card">
    <div className="bookinfo">
      <span>Action</span>
      <h1>The Hunger Games</h1>
      <span>Suzanne Collins</span>

      <ul>
        <li>
          <button key="btn-comment" type="button">Comments</button>
        </li>
        <li>
          <button key="btn-remove" type="button">Remove</button>
        </li>
        <li>
          <button key="btn-edit" type="button">Edit</button>
        </li>
      </ul>
    </div>
    <div className="progress-chart">
      <span>64%</span>
      <span>completed</span>
    </div>
    <div className="view-progress">
      <span>Current chapter</span>
      <h3>Chapter 17</h3>
      <button type="button">Update progress</button>
    </div>
  </div>
);

export default BookCard;
