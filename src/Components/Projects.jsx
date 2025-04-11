import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed
import linkedinIcon from "../assets/linkedin.png"
import twitterIcon from "../assets/twitter.png"
import githubIcon from "../assets/github.webp" // Update the path to your GitHub icon
import Bansalresume from '../assets/Bansal Resume.docx.pdf'

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: '',
      viewLink: 'https://github.com/astro1sumit/QRBarcodescannerapp',
      detailsLink: 'https://github.com/astro1sumit/QRBarcodescannerapp',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150?text=Project+2',
      viewLink: 'https://example.com/project2',
      detailsLink: 'https://example.com/project2/details',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/150?text=Project+3',
      viewLink: 'https://example.com/project3',
      detailsLink: 'https://example.com/project3/details',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/150?text=Project+4',
      viewLink: 'https://example.com/project4',
      detailsLink: 'https://example.com/project4/details',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/150?text=Project+5',
      viewLink: 'https://example.com/project5',
      detailsLink: 'https://example.com/project5/details',
    },
  ];

  return (
    <div className="projects-page">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Krishna Bansal</a>
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
              <li className="nav-item">
                <Link className="nav-link active p-4" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-4" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-4" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-4" to="/project">Projects</Link>
              </li>
            </ul>
            {/* Download CV Button */}
            <a href={Bansalresume} download="KrishnaBansal" className="my-cv">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="first-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            {/* Left Column: Intro Section */}
            <div className="col-md-6">
              <div className="intro">
                <p className="title">-INTRODUCTION</p>
                <p className="hi">Hi There!👋</p>
                <h1 className="my-name">
                  I'm <span>Krishna Bansal</span>
                </h1>
                <p className="slogun">
                  I help startups create stunning websites that make an impact on the market.
                </p>

                {/* CTA Button */}
                <a href="#connectMe" className="homeBtn">
                  Let’s create an awesome website!
                </a>

                {/* Social Media Links */}
                <div className="social-media">
                  <a href="https://github.com/astro1sumit" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href="https://github.com/astro1sumit" target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href="https://github.com/astro1sumit" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Image Section */}
            <div className="col-md-6 pb-0 img">
              {/* <img src={myImage} alt="Krishna Bansal" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="image-section">
              <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                <button className="btn1">View</button>
              </a>
              <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                <button className="btn2">GitHub</button>
              </a>
              <img
                src={project.image}
                alt={`Project ${project.id}`}
                className="project-image"
              />
            </div>

            <div className="description-section">
              <h3>Project {project.id}</h3>
              <p>
                This is a brief description of project {project.id}. It highlights
                the main features and purpose of the project.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
