import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './Home.jsx';
import Profile from './Profile.jsx'; 
import Internal_empty from './Internal_empty.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/internal-empty" element={<Internal_empty />} /> 
      </Routes>
    </Router>
  </StrictMode>
);