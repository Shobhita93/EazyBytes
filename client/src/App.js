
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import About from './pages/About';



function App() {
  return (
    <Router>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path  ="/projects" element ={<Projects/>}/>
          <Route path ="/Contact" element={<Contact/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </div>
     <Footer/>
     </Router>
   
  );
}

export default App;
