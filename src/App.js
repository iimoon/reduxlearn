import React from "react";
import { BrowserRouter as Router, Routes, Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./Component/Home/Home"
import Header from "./Component/Header/Header"
import MovieDetails from "./Component/MovieDetails/MovieDetails"
import PageNotFound from "./Component/PageNotFound/PageNotFound"
import Footer from "./Component/Footer/Footer"

import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
