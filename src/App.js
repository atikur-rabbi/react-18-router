import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './style.css';
import About from './components/About';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <p>Start editing to see some magic happen :)</p>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
