import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Product from './pages/Product'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
      <h2>This is Footer</h2>
    </div>
  );
};

export default App;
