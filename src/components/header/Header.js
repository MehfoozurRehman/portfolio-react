import React from "react";
import "./Header.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "../../data/data.json";

class Header extends React.Component {
  toggle_nav() {
    const menuBtn = document.querySelector(".menu-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    if (mobileNav.style.display === "none") {
      document.querySelector(".mobile-nav").style.display = "flex";
      menuBtn.classList.add("open");
    } else {
      document.querySelector(".mobile-nav").style.display = "none";
      menuBtn.classList.remove("open");
    }
  }

  toggle_theme() {
    var checkbox = document.querySelector("input[name=theme]");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        trans();
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        trans();
        document.documentElement.setAttribute("data-theme", "light");
      }
    });

    let trans = () => {
      document.documentElement.classList.add("transition");
      window.setTimeout(() => {
        document.documentElement.classList.remove("transition");
      }, 1000);
    };
  }

  render() {
    return (
      <header className="header">
        <nav className="nav">
          {data.HeaderData.map((headerData) => {
            return (
              <Link to="/" className="brand-name">
                {headerData.name}
              </Link>
            );
          })}
          <div className="menu-btn" onClick={this.toggle_nav}>
            <div className="menu-btn__burger"></div>
          </div>
          <div className="desktop-nav">
            <a href="#jumbotron" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#resume" className="nav-link">
              Resume
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
            <div className="toggle-container">
              <input
                type="checkbox"
                id="switch"
                name="theme"
                onClick={this.toggle_theme}
              />
              <label className="label" htmlFor="switch">
                Toggle
              </label>
            </div>
          </div>
        </nav>
        <div className="mobile-nav">
          <a href="#jumbotron" className="mobile-nav-link">
            Home
          </a>
          <a href="#about" className="mobile-nav-link">
            About
          </a>
          <a href="#resume" className="mobile-nav-link">
            Resume
          </a>
          <a href="#services" className="mobile-nav-link">
            Services
          </a>
          <a href="#portfolio" className="mobile-nav-link">
            Portfolio
          </a>
          <a href="#pricing" className="mobile-nav-link">
            Pricing
          </a>
          <a href="#contact" className="mobile-nav-link">
            Contact
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
