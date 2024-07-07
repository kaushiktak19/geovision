// src/App.tsx
import React from 'react';
import './App.css';
import MapComponent from './components/MapComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>US Population Density Map</h1>
            </header>
            <MapComponent />
        </div>
    );
};

export default App;
