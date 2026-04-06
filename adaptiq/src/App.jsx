import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Roadmap from './pages/Roadmap';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Progress from './pages/Progress';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </div>
  );
}

export default App;
