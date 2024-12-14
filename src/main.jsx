// index.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Acceuil from './acceuil.jsx'; // Assurez-vous que ce chemin est correct
import Settings from './setting.jsx'; // Assurez-vous que ce chemin est correct
import Play from './play.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/play" element={<Play/>} />
      </Routes>
    </Router>
  </StrictMode>
);
