import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150?text=Project+1',
      viewLink: 'https://example.com/project1',
      detailsLink: 'https://example.com/project1/details',
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
    <div className="projects-container">
      {projects.map((project) => (
        <div className="project-card" key={project.id}>
          <div className="image-section">
            <a href={project.viewLink} target="_blank" rel="noopener noreferrer">
              <button className="btn1">View</button>
            </a>
            <a href={project.detailsLink} target="_blank" rel="noopener noreferrer">
              <button className="btn2">Details</button>
            </a>
            <img
              src={project.image}
                // alt={`Project ${project.id}`}
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
  );
};

export default Projects;
