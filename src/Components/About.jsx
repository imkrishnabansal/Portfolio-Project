import React from "react";
import { Link } from "react-router-dom";
// Import Images
// import emailIcon from "../assets/img/email.png";
// import linkedinIcon from "../assets/img/LinkedIn Circled.png";
// import twitterIcon from "../assets/img/twt2.png";
// import githubIcon from "../assets/img/GitHub.png";
// import workImage from "../assets/img/Girl is working on laptop at a remote job.png";
// import resumePDF from "../assets/cv/divya_kumari_resume.pdf"; 
const About = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Divya K</Link>
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
              <li className="nav-item"><Link className="nav-link p-4" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link active p-4" to="/about">About</Link></li>
              <li className="nav-item"><Link className="nav-link p-4" to="/pricing">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link p-4" to="/projects">Projects</Link></li>
            </ul>
            {/* <a href={resumePDF} download="DivyaKumari" className="my-cv">Download CV</a> */}
          </div>
        </div>
      </nav>

      {/* About Me Section */}
      <div className="section bg">
        <div className="container-fluid">
          <p className="title">-ABOUT</p>
          <div className="About-section">
            <h2>ABOUT ME</h2>
            <div className="row img-sec">
              <div className="col-md-6">
                <p className="para">
                  I’m Krishna bansal, a junior and talented Web Designer with front-end development skills. I am passionate about leveraging my diverse background to decipher challenging problems and create delightful experiences.
                  <br /><br />
                  I develop websites with HTML, CSS, and JavaScript. I have top skills in using design software like Figma, Adobe XD, and Photoshop.
                </p>
                <br />
                <a href="mailto:kumaridivya2796@gmail.com" className="homeBtn">HIRE ME</a>
                {/* <a href={resumePDF} download="DivyaKumari" className="my-cv">Download CV</a> */}
              </div>
              <div className="col-md-6 img-sec text-center">
                {/* <img src={workImage} className="img-fluid" alt="Working on a laptop" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="section">
        <div className="container-fluid">
          <p className="title">-CONTACT</p>
          <div className="contact-section">
            <h2>GET IN TOUCH</h2>
            <p className="para">
              I am available to work on your projects and bring your ideas to life. I am just a click away.
            </p>
            <div className="row img-sec justify-content-center">
              {/* Contact Info */}
              <div className="col-md-6">
                <div className="contact">
                  <a href="mailto:kumaridivya2796@gmail.com" className="email">
                    {/* <img src={emailIcon} alt="Email Me" /> &nbsp; &nbsp; kumaridivya2796@gmail.com */}
                  </a>
                </div>
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
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-bottom">
          <span>{new Date().getFullYear()}</span> © Portfolio Pvt. Ltd. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default About;
