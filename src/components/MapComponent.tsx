// src/components/Map.tsx
import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

const MapComponent: React.FC = () => {
    const mapElement = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const map = new Map({
            target: mapElement.current!,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    }),
                }),
            ],
            view: new View({
                center: fromLonLat([-95.7129, 37.0902]), // Centered on the USA
                zoom: 4,
            }),
        });

        return () => map.setTarget(undefined);
    }, []);

    return <div ref={mapElement} style={{ width: '100%', height: '100vh' }} />;
};

export default MapComponent;
