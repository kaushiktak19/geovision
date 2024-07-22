import React from 'react';
import '../styles/Legend.css';

const Legend: React.FC = () => {
    return (
        <div className="legend bg-white p-2 rounded shadow-md">
            <h4 className="font-bold mb-2">Population Density</h4>
            <ul className="text-sm">
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(128, 0, 38, 0.85)' }}></span> 1000 +</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(189, 0, 38, 0.8)' }}></span> 750 - 1000</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(227, 26, 28, 0.8)' }}></span> 500 - 750</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(252, 78, 42, 0.8)' }}></span> 250 - 500</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(253, 141, 60, 0.8)' }}></span> 100 - 250</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(254, 178, 76, 0.8)' }}></span> 50 - 100</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(254, 217, 118, 0.8)' }}></span> 25 - 50</li>
                <li className="flex items-center"><span className="legend-color" style={{ backgroundColor: 'rgba(255, 237, 160, 0.8)' }}></span> 1 - 25</li>
            </ul>
        </div>
    );
};

export default Legend;
