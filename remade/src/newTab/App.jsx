import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Hello, Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

export default function App() {
  return (
    <HashRouter>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
