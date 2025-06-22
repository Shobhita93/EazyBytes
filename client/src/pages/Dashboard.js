import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import './Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    image: '',
    github: '',
    live: ''
  });

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/projects', form, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setForm({ title: '', description: '', image: '', github: '', live: '' });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleAddProject} className="project-form">
        <input type="text" placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <input type="text" placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input type="text" placeholder="Image URL" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} required />
        <input type="text" placeholder="GitHub Link" value={form.github} onChange={e => setForm({ ...form, github: e.target.value })} />
        <input type="text" placeholder="Live Link" value={form.live} onChange={e => setForm({ ...form, live: e.target.value })} />
        <button type="submit">Add Project</button>
      </form>

      <div className="project-list">
        {projects.map(proj => (
          <div key={proj._id} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            {proj.image && <img src={proj.image} alt={proj.title} width="200" />}
            <div>
              {proj.github && <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>}
              {proj.live && <a href={proj.live} target="_blank" rel="noreferrer">Live</a>}
            </div>
            <button onClick={() => handleDelete(proj._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
