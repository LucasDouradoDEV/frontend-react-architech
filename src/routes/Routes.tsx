import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';

export default function AppRoutes() {    
  return (
    <Router>
      <Routes>
        {/* Rotas */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}