import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => (
  <div className='app'>
    <Nav />
    <Routes>
      <Route path='/' element={<Books />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  </div>
)

export default App;
