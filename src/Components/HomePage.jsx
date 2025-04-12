import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import "../App.css";
import Bansalresume from "../assets/Bansal Resume.docx.pdf";
import myImage from "../assets/Img1.png";
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import githubIcon from "../assets/github.webp";
import Img2 from "../assets/img2.png";
import Img3 from "../assets/Img3.png";
import Img4 from "../assets/img4.png";
import Img5 from "../assets/Img5.png"
import email from "../assets/Email.webp"

const user = {
  name: "Krishna Bansal",
  linkedIn: "https://www.linkedin.com/in/imkrishnabansal/",
  xLink: "https://x.com/krishna_ba48793",
  gitHub: "https://github.com/imkrishnabansal"
}

const name = "Krishna Bansal"

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{user.name}</a>
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
                <Link className="nav-link active p-4" to="/homepage">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-4" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link p-4" to="/project">Projects</Link>
              </li>
            </ul>
            <a href={Bansalresume} download="KrishnaBansal" className="my-cv">Download</a>
          </div>
        </div>
      </nav>

      {/* Hero section */}
      <div className="first-section">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="intro">
                <p className="title">-INTRODUCTION</p>
                <p className="hi">Hi There!👋</p>
                <h1 className="my-name">
                  I'm <span>{user.name}</span>
                </h1>
                <p className="slogun">
                  I help startups create stunning websites that make an impact on the market.
                </p>
                <a href="#connectMe" className="homeBtn">
                  Let’s create an awesome website!
                </a>
                <div className="social-media">
                  <a href={user.linkedIn} target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" />
                  </a>
                  <a href={user.xLink} target="_blank" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="Twitter" />
                  </a>
                  <a href={user.gitHub} target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-0 img">
              {/* Optional: Add image if needed */}
              {/* <img src={myImage} alt="Krishna Bansal" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="section">
        <div className="container-fluid">
          <p className="title">-PROJECTS</p>
          <div className="project-section">
            <h2>FEATURED WORK</h2>
            <p className="para">
              I love making websites that can grow big, finding useful solutions, and always learning to get better in the IT world.
            </p>
          </div>

          <div className="project-grid">
          <div className="item1">
              <div className="layer">
                <img src={Img2} alt="Project Preview" className="layer-image" />
                <div className="project-links">
                  <a href="https://github.com/imkrishnabansal/Quiz-App" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://imkrishnabansal.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">Live Web</a>
                </div>
              </div>
            </div>

            <div className="item2">
              <div className="layer">
                <img src={Img5} alt="Project Preview" className="layer-image" />
                <div className="project-links">
                  <a href="https://github.com/imkrishnabansal/Quiz-App" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://imkrishnabansal.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">Live Web</a>
                </div>
              </div>
            </div>

            <div className="item3">
              <div className="layer">
                <img src={Img3} alt="Project Preview" className="layer-image" />
                <div className="project-links">
                  <a href="https://github.com/imkrishnabansal/BookScape" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://imkrishnabansal.github.io/BookScape/" target="_blank" rel="noopener noreferrer">Live Web</a>
                </div>
              </div>
            </div>

            <div className="item4">
              <div className="layer">
                <img src={Img4} alt="Project Preview" className="layer-image" />
                <div className="project-links">
                  <a href="https://github.com/imkrishnabansal/Riwayat-ByteWave" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="#" target="_blank" rel="noopener noreferrer">Live Web</a>
                </div>
              </div>
            </div>

            <div className="item5">
              <div className="layer">
                <img src={myImage} alt="Project Preview" className="layer-image" />
                <div className="project-links">
                  <a href="https://github.com/imkrishnabansal/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://imkrishnabansal.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">Live Web</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="section bg">
        <div className="container-fluid">
          <p className="title">-SERVICES</p>
          <div className="project-section">
            <h2>SERVICES I PROVIDE</h2>
            <p className="para">
              The goal is not to build a website. The goal is to build your business.
            </p>
          </div>
          <div className="services">
            <div className="service-section">
              <div className="service">
                <h3>UI/UX Design</h3>
                <p>I work with design tools to create high-fidelity designs and prototypes. I design accessible and usable products to aid business growth.</p>
              </div>
            </div>
            <div className="service-section">
              <div className="service">
                <h3>Web Development</h3>
                <p>I use various web technologies to develop attractive websites that convert visitors into customers.</p>
              </div>
            </div>
            <div className="service-section">
              <div className="service">
                <h3>Google Ads</h3>
                <p>Grow your business with Google Ads. Get in front of customers when they're searching for businesses like yours.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Connect Section */}
      <div className="section">
        <div className="container-fluid bg rounded text-center pb-5 pos-relative">
          <img src="./img/Rocket1.png" alt="Rocket" />
          <h1 className="custom-h1">HAVE A PROJECT IN MIND?</h1>
          <p className="para p-4">Turn your dream website into reality with us. Let's get started!</p>
          <a href="#" className="homeBtn">Let’s create an awesome website</a>
        </div>
      </div>

      {/* Contact Section */}
      <div id="connectMe" className="section">
  <div className="container-fluid">
    <p className="title">-CONTACT</p>
    <div className="contact-section">
      <h2>GET IN TOUCH</h2>
      <p className="para">I'm here and ready to bring your project ideas to life. Just a click away!</p>
      <div className="row img-sec justify-content-center">
        <div className="col-md-6">
          <div className="contact">
            <a href="mailto:lalibansal454@gmail.com" className="email">
              <img src={email} alt="email me:"/> &nbsp; &nbsp;
            lalibansal454@gmail.com
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/imkrishnabansal/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
            </a>
            <a href="https://x.com/krishna_ba48793" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
            </a>
            <a href="https://github.com/imkrishnabansal" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form">
            <form
              className="formSubmit"
              action="https://formsubmit.co/el/f5c2f5944e723b39e701dbaeba282c9d"
              method="POST"
            >
              <input type="text" name="name" placeholder="Full Name" required /><br />
              <input type="email" name="email" placeholder="Email" required />
              <input type="number" name="phone" placeholder="Phone No." /><br />
              <textarea name="message" id="msg" placeholder="Message" cols="30" rows="10" required></textarea><br />
              <button className="button" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  );
};

export default HomePage;
