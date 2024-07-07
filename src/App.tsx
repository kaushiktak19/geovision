import React from 'react';
import './App.css';
import MapComponent from './components/MapComponent';
import Legend from './components/Legend';

const App: React.FC = () => {
    return (
        <div className="App">
            <header className="App-header">
                <h1>US Population Density Map</h1>
            </header>
            <div className="map-container">
                <MapComponent />
                <Legend />
            </div>
        </div>
    );
};

export default App;
