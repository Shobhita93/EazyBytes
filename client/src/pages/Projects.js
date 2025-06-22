import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github}>GitHub</a> | <a href={project.live}>Live Demo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;