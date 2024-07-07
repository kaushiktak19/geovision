import React from 'react';
import '../styles/Legend.css';

const Legend: React.FC = () => {
    return (
        <div className="legend">
            <h4>Population Density</h4>
            <div><span style={{ background: '#FFEDA0' }}></span>0 - 10</div>
            <div><span style={{ background: '#FED976' }}></span>10 - 20</div>
            <div><span style={{ background: '#FEB24C' }}></span>20 - 50</div>
            <div><span style={{ background: '#FD8D3C' }}></span>50 - 100</div>
            <div><span style={{ background: '#FC4E2A' }}></span>100 - 200</div>
            <div><span style={{ background: '#E31A1C' }}></span>200 - 500</div>
            <div><span style={{ background: '#BD0026' }}></span>500 - 1000</div>
            <div><span style={{ background: '#800026' }}></span>1000+</div>
        </div>
    );
};

export default Legend;
