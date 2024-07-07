import React from 'react';
import '../styles/Legend.css';

const Legend: React.FC = () => {
    return (
        <div className="legend">
            <h4>Population Density</h4>
            <div><span style={{ background: '#FFEDA0' }}></span>0 - 25</div>
            <div><span style={{ background: '#FED976' }}></span>25 - 50</div>
            <div><span style={{ background: '#FEB24C' }}></span>50 - 100</div>
            <div><span style={{ background: '#FD8D3C' }}></span>100 - 250</div>
            <div><span style={{ background: '#FC4E2A' }}></span>250 - 500</div>
            <div><span style={{ background: '#E31A1C' }}></span>500 - 750</div>
            <div><span style={{ background: '#BD0026' }}></span>750 - 1000</div>
            <div><span style={{ background: '#800026' }}></span>1000+</div>
        </div>
    );
};

export default Legend;
