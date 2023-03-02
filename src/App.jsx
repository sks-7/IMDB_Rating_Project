import { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie/:id" element={<>Movie</>}></Route>
        <Route path="movies/:type" element={<>MovieList</>}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
