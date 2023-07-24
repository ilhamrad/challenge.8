import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import NewPlayer from "./pages/newPlayer";
import EditPlayer from "./pages/editPlayer";
import Search from "./pages/search";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/NewPlayer" element={<NewPlayer />} />
        <Route path="/EditPlayer" element={<EditPlayer/>} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
