import React from 'react';
import Navbar from '../navbar';
const Projects = () => {
  const projects = [
    {
      id: 1,
      image: '/src/assets/Img1.png',
      viewLink: 'https://imkrishnabansal.github.io/Quiz-App/',
      detailsLink: 'https://example.com/project1/details',
      description: 'A fun and interactive Quiz App built with JavaScript. Includes multiple-choice questions and tracks user scores.'
    },
    {
      id: 2,
      image: '/src/assets/Img2.png',
      viewLink: 'https://imkrishnabansal.github.io/Quiz-App/',
      detailsLink: 'https://example.com/project2/details',
      description: 'An elegant portfolio website template created using HTML, CSS, and JavaScript. Perfect for personal branding.'
    },
    {
      id: 3,
      image: '/src/assets/Img3.png',
      viewLink: 'https://imkrishnabansal.github.io/BookScape/',
      detailsLink: 'https://example.com/project3/details',
      description: 'A to-do list web app using React. Includes features like adding, deleting, and editing tasks with local storage.'
    },
    {
      id: 4,
      image: '/src/assets/Img4.png',
      viewLink: 'https://github.com/imkrishnabansal/Riwayat-ByteWave',
      detailsLink: 'https://example.com/project4/details',
      description: 'A weather app that fetches real-time weather data from the OpenWeatherMap API using Axios and React hooks.'
    }
  ];

  return (
    <div className="projects-container">
       <Navbar></Navbar> {/* Render Navbar here */}
      <h2 className="projects-title">My Projects</h2>
      {projects.map((project, index) => (
        <div
          className="project-card"
          key={project.id}
          style={{
            backgroundColor: ['#FFF0F5', '#F0FFFF',  '#FFFAF0' , '#F5FFFA'][index % 4], // Rotate colors
          }}
        >
          <div className="image-section">
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="project-image"
            />
          </div>
          <div className="description-section">
            <h3>Project {project.id}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              {project.viewLink && (
                <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
                  <button className="btn view-btn">View</button>
                </a>
              )}
              <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
                <button className="btn details-btn">Details</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
