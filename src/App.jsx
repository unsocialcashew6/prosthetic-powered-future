import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home"; // Импортируйте Home.jsx
import About from "./pages/About";
import Company from "./pages/Company";
import Contacts from "./pages/Contacts";
import News from "./pages/News";

const App = () => {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Nav />
        <Routes>
          {/* Главная страница */}
          <Route path="/" element={<Home />} />

          {/* Другие страницы */}
          <Route path="/about" element={<About />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;