// import React from 'react';
// import './App.css';
// import MapComponent from './components/MapComponent';
// import Legend from './components/Legend';

// const App: React.FC = () => {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <h1>US Population Density Map</h1>
//             </header>
//             <div className="map-container">
//                 <MapComponent />
//                 {/* <Legend /> */}
//             </div>
//         </div>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import MapComponent from './components/MapComponent'; // Assuming MapPage is where you display the map
import "./App.css"

const App: React.FC = () => {
    return (
      <div className="App">
        <Router>
                <header className="App-header">
                  <h1>US Population Density Map</h1>
                </header>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/map" element={<MapComponent />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;

