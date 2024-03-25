import React from "react";
import logo from "../img/logo.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt = "brand"></img>
          <span>Glow up</span>
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class='bx bx-menu'></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Color Analysis
            </a>
            <a className="nav-link" href="#">
              How it works
            </a>
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
          </div>
          <a href="#" class="btn btn-primary shadow-none">Get started</a>
        </div>
      </div>
    </nav>
  );
}
