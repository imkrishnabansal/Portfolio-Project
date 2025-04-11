import React from "react";
import {Link} from 'react-router-dom'
import About from "./About";
import Projects from "./Projects";
import "../App.css"
import Bansalresume from "../assets/Bansal Resume.docx.pdf"
import myImage from "../assets/Img1.png"
import linkedinIcon from "../assets/linkedin.png"
import twitterIcon from "../assets/twitter.png"
import githubIcon from "../assets/github.webp"



const HomePage = () => {
  return (
    <div>
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
              <a href={Bansalresume} download="KrishnaBansal" className="my-cv">Download  </a>
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
                I'm <span>Krishna bansal</span>
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
          </div>

          {/* Right Column: Image Section */}
          <div className="col-md-6 pb-0 img">
            {/* <img src={myImage} alt="Divya Kumari" /> */}
          </div>
        </div>
      </div>
    </div>
    {/* Projects */}
    <div className="section">
      <div className="container-fluid">
        {/* Title Section */}
        <p className="title">-PROJECTS</p>

        {/* Project Description */}
        <div className="project-section">
          
          <h2>FEATURED WORK</h2>
          <p className="para">
            I love making websites that can grow big, finding useful solutions, and always learning to get better in the IT world.
          </p>
        </div>

        {/* Project Grid */}
        <div className="project-grid">
          {/* Project Item 1 */}
          <div className="item1">
  <div className="layer">
    <img src={myImage} alt="Project Preview" className="layer-image" />
    <div className="project-links">
      <a href="https://github.com/imkrishnabansal/Tic-Tac-Toe" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      <a href="https://imkrishnabansal.github.io/Tic-Tac-Toe/" target="_blank" rel="noopener noreferrer">
        Live Web
      </a>
    </div>
  </div>
</div>

          {/* Project Item 2 */}
          <div className="item2">
            <div className="layer">
              <a href="https://github.com/imkrishnabansal/Riwayat-ByteWave" target="" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                Live Web
              </a>
            </div>
          </div>

          {/* Project Item 3 */}
          <div className="item3">
            <div className="layer">
              <a href="" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                Live Web
              </a>
            </div>
          </div>

          {/* Project Item 4 */}
          <div className="item4">
            <div className="layer">
              <a href="https://github.com/imkrishnabansal/BookScape" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://imkrishnabansal.github.io/BookScape/" target="_blank" rel="noopener noreferrer">
                Live Web
              </a>
            </div>
          </div>
          {/* Project Item 5 */}
          <div className="item5">
            <div className="layer">
              <a href="https://github.com/imkrishnabansal/Quiz-App" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://imkrishnabansal.github.io/Quiz-App/" target="_blank" rel="noopener noreferrer">
                Live Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="section bg">
      <div className="container-fluid">
        {/* Section Title */}
        <p className="title">-SERVICES</p>

        {/* Service Introduction */}
        <div className="project-section">
          <h2>SERVICES I PROVIDE</h2>
          <p className="para">
            The goal is not to build a website. The goal is to build your business.
          </p>
        </div>

        {/* Services List */}
        <div className="services">
          {/* Service 1: UI/UX Design */}
          <div className="service-section">
            <div className="service">
              {/* <img src={uiuxImage} alt="UI/UX Design" /> */}
              <h3>UI/UX Design</h3>
              <p>
                I work with certain design tools to create high-fidelity designs and prototypes. I design accessible and
                usable products which aid business growth.
              </p>
            </div>
          </div>

          {/* Service 2: Web Development */}
          <div className="service-section">
            <div className="service">
              {/* <img src={webDesignImage} alt="Web Development" /> */}
              <h3>Web Development</h3>
              <p>
                I use various web technologies to develop attractive websites that convert visitors into customers.
                I develop creative and responsive website layouts.
              </p>
            </div>
          </div>

          {/* Service 4: Google Ads */}
          <div className="service-section">
            <div className="service">
              {/* <img src={googleAdsImage} alt="Google Ads" /> */}
              done
              <h3>Google Ads</h3>
              <p>
                Grow your business with Google Ads. Get in front of customers when they're searching for businesses like
                yours on Google Search and Maps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Skills */}
     {/* <div className="section">
        <div className="container-fluid">
          <p className="title">-SKILLS</p>
          <div className="skill-section">
            <h2>AREA OF EXPERTISE</h2>
            <p className="para">
              Let's kickstart your project and collaborate to build something amazing. I'll bring my skills to make your next project shine.
            </p>
          </div> */}

          {/* <div className="skills">
            {[
              { src: "./img/Html.png", label: "HTML", className: "border1 border_right" },
              { src: "./img/css.png", label: "CSS", className: "border1" },
              { src: "./img/javascript (1).png", label: "JAVASCRIPT", className: "border1 border3" },
              { src: "./img/Bootstrap 1.png", label: "BOOTSTRAP", className: "border1" },
              { src: "./img/node-js.png", label: "Node.js", className: "border1 border_right" },
              { src: "./img/react (2).png", label: "React", className: "border1" },
              { src: "./img/git (2).png", label: "Git", className: "border1 border_right border7" },
              { src: "./img/github (7).png", label: "GitHub", className: "border1" },
              { src: "./img/adobe-xd.png", label: "Adobe XD", className: "border_bottom borderSL" },
              { src: "./img/photoshop.png", label: "Photoshop", className: "border2 border10" },
              { src: "./img/icons8-figma-512.png", label: "Figma", className: "border_right" },
              { src: "./img/WordPress.png", label: "WordPress", className: "" },
            ].map((skill, index) => (
              <div className={`skill ${skill.className}`} key={index}>
                <div className="items">
                  <img src={skill.src} alt={skill.label} />
                  <p>{skill.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Connect Section */}
      <div className="section">
        <div className="container-fluid bg rounded text-center pb-5 pos-relative">
          <img src="./img/Rocket1.png" alt="Rocket" />
          <h1 className="custom-h1">HAVE A PROJECT IN MIND?</h1>
          <p className="para p-4">Turn your dream website into reality with us. Let's get started!</p>
          <a href="#" className="homeBtn">
            Let’s create an awesome website
          </a>
        </div>
      </div>
    {/* Connect me and footer */}
    <div id="connectMe" className="section">
      <div className="container-fluid">
        {/* Section Title */}
        <p className="title">-CONTACT</p>

        {/* Contact Section */}
        <div className="contact-section">
          <h2>GET IN TOUCH</h2>
          <p className="para">
            I'm here and ready to bring your project ideas to life. Just a click away!
          </p>

          {/* Contact Form and Social Media */}
          <div className="row img-sec justify-content-center">
            {/* Contact Info */}
            <div className="col-md-6">
              <div className="contact">
                <a href="mailto:kumaridivya2796@gmail.com" className="email">
                  {/* <img src={emailIcon} alt="Email Me" /> &nbsp; &nbsp; */}
                  lalibansal454@gmail.com
                </a>
              </div>

              {/* Social Media Links */}
              <div className="social-media">
                <a href="https://www.linkedin.com/in/iamdivyak/" target="_blank" rel="noopener noreferrer">
                  {/* <img src={linkedinIcon} alt="LinkedIn" /> */}
                </a>
                <a href="https://twitter.com/Imdivyakumari" target="_blank" rel="noopener noreferrer">
                  {/* <img src={twitterIcon} alt="Twitter" /> */}
                </a>
                <a href="https://github.com/Iamdivyak" target="_blank" rel="noopener noreferrer">
                  {/* <img src={githubIcon} alt="GitHub" /> */}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-md-6">
              <div className="form">
                <form className="formSubmit" action="https://formsubmit.co/el/f5c2f5944e723b39e701dbaeba282c9d" method="POST">
                  <input type="text" name="name" placeholder="Full Name" required /><br />
                  <input type="email" name="email" placeholder="Email" required /><br />
                  <input type="tel" name="phone" placeholder="Phone No." required /><br />
                  <textarea name="message" id="msg" placeholder="Message" cols="30" rows="10" required></textarea><br />
                  <button className="button" type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-bottom">
          <span>{new Date().getFullYear()}</span> © Portfolio Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>

      {/* Back to Top Button */}
      <button className="back-to-top" type="button"></button>
    </div>
    </div>
  );
};

export default HomePage;
