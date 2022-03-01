import React from 'react';

const Form = () => (
    <form>
        <input className="add-title" type="text" placeholder="Book title" />
        <input className="add-category" type="text" placeholder="Category" />
        <button className="btn" type="submit" >Add Book</button>
    </form>
);

export default Form;