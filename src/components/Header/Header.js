import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>

      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <div className="navbar-logo-box">
          <img src="./assets/navlogogreen.png" alt="Logo" />
        </div>
        <div className={`nav ${isMenuOpen ? "active" : ""}`}>
          <button id="navToggleBtn" className="nav-toggle" onClick={toggleMenu}>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
            <div className="bar"> </div>
          </button>

          <div className="nav-items">
            <Link to="/home">Home</Link>
            <Link to="/despre">Despre</Link>
            <Link to="/servicii">Servicii</Link>
            <Link to="/galerie">Galerie</Link>
            <Link to="/preturi">Preturi</Link>
            <Link to="/contact">Contact</Link>

            <div className="bookingnav"><Link to="/Calendar">
              <b>Programeaza-te ✂️</b>
            </Link></div>
          </div>
        </div>

        <div className="social-container">
          <a
            href="https://www.facebook.com/andrija.radevici"
            className="facebookbesocial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/radevici_andrija?utm_source=ig_web_button_share_sheet&igsh=OGQ5ZDc2ODk2ZA=="
            className="instagrambesocial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <ReactWhatsapp
            number="+40 0763098807"
            className="whatsappsocial"
            message="Salut, doresc o programare!"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              bounce
              style={{ color: "#075e54" }}
              size="2x"
            />
          </ReactWhatsapp>
        </div>
      </nav>

    </header>

  );
};

export default Header;
