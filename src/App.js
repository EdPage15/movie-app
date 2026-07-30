// apiKey = b561df05
// https://www.omdbapi.com/?apikey=b561df05&s=

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Movie from './pages/Movie';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<Movie />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;