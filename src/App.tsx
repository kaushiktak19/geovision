import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MapComponent from './components/MapComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <header className="bg-gray-800 text-white p-4 text-center">
          <h1 className="text-3xl font-bold">US Population Density Map</h1>
        </header>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapComponent />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
