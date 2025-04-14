import React from "react";
import { Link } from "react-router-dom";
// Import Images
// import emailIcon from "../assets/img/email.png";
// import linkedinIcon from "../assets/img/LinkedIn Circled.png";
// import twitterIcon from "../assets/img/twt2.png";
// import githubIcon from "../assets/img/GitHub.png";
// import workImage from "../assets/img/Girl is working on laptop at a remote job.png";
// import resumePDF from "../assets/cv/divya_kumari_resume.pdf"; 
import Bansalresume from "../assets/Bansal Resume.docx.pdf"
import linkedinIcon from "../assets/linkedin.png";
import twitterIcon from "../assets/twitter.png";
import githubIcon from "../assets/github.webp";
import email from "../assets/Email.webp"
import workImage from "../assets/Agirl.jpg"
import Navbar from "../navbar";
const About = () => {
  return (
    <>
      <Navbar></Navbar>

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
                  I develop websites with MERN stack I have top skills in using design software like WordPress Canva etc.
                </p>
                <br />
                <a href="mailto:lalibansal454@gmail.com" className="homeBtn">HIRE ME</a>
                <a href={Bansalresume} download="Krishna Bansal " className="my-cv">Download CV</a>
              </div>
              <div className="col-md-6 img-sec text-center">
                <img src={workImage} className="img-fluid" alt="Working on a laptop" />
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
                  <a href="mailto:Krishna.bansal_cs22@gla.ac.in" className="email">
                    <img src={email} alt="Email Me" /> &nbsp; &nbsp; Krishna.bansal_cs22@gla.ac.in 
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
