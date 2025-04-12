import React from "react";
import { Link } from "react-router-dom"; 
import Bansalresume from "./assets/Bansal Resume.docx.pdf"
const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Krishna Bansal</Link>
          <button
            className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link p-4" to="/homepage">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active p-4" to="/about">About</Link></li>
              {/* <li className="nav-item"><Link className="nav-link p-4" to="/pricing">Pricing</Link></li> */}
              <li className="nav-item"><Link className="nav-link p-4" to="/project">Projects</Link></li>
            </ul>
            <a href={Bansalresume} download="KrishnaBansal" className="my-cv">Download </a>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;
