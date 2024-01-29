import React, { useState } from "react";
import Main from "./components/Main/Main"

import "./pages/Home/Home.css";
import "./pages/Programari/Calendar.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Despre from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Galerie from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import Preturi from "./pages/Prices/Prices";
import Servicii from "./pages/Services/Services";
import Calendar from "./pages/Programari/Calendar";
import Page404 from "./pages/404/Page404";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/despre" element={<Despre />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/galerie" element={<Galerie />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/preturi" element={<Preturi />} />
          <Route exact path="/servicii" element={<Servicii />} />
          <Route exact path="/calendar" element={<Calendar />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
