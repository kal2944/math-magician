import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Math from './pages/Calculator-page';
import './App.css';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Nav from './pages/navBar/navBar';

function App() {
  return (
    <BrowserRouter>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Math />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
