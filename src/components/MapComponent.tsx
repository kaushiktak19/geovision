import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Style, Fill, Stroke } from 'ol/style';
import { GeoJSON } from 'ol/format';
import Overlay from 'ol/Overlay';
import Legend from './Legend';
import '../styles/MapComponent.css'; 

const MapComponent: React.FC = () => {
    const mapElement = useRef<HTMLDivElement | null>(null);
    const popupElement = useRef<HTMLDivElement | null>(null); 
    const [popupContent, setPopupContent] = useState<string>('');
    const [popupPosition, setPopupPosition] = useState<number[]>([]);
    const [showDensity, setShowDensity] = useState<boolean>(true);
    const [map, setMap] = useState<Map | null>(null);
    const [vectorLayer, setVectorLayer] = useState<VectorLayer<any> | null>(null);

    useEffect(() => {
        if (!mapElement.current || !popupElement.current) return;

        const vectorSource = new VectorSource({
            url: 'https://openlayers.org/data/vector/us-states.json',
            format: new GeoJSON(),
        });

        const newVectorLayer = new VectorLayer({
            source: vectorSource,
            style: (feature) => {
                const density = feature.get('density');
                let fillColor = 'rgba(0, 0, 255, 0.1)';
                if (density > 1000) fillColor = 'rgba(128, 0, 38, 0.85)';
                else if (density > 750) fillColor = 'rgba(189, 0, 38, 0.8)';
                else if (density > 500) fillColor = 'rgba(227, 26, 28, 0.8)';
                else if (density > 250) fillColor = 'rgba(252, 78, 42, 0.8)';
                else if (density > 100) fillColor = 'rgba(253, 141, 60, 0.8)';
                else if (density > 50) fillColor = 'rgba(254, 178, 76, 0.8)';
                else if (density > 25) fillColor = 'rgba(254, 217, 118, 0.8)';
                else if (density > 0) fillColor = 'rgba(255, 237, 160, 0.8)';
                return new Style({
                    fill: new Fill({
                        color: fillColor,
                    }),
                    stroke: new Stroke({
                        color: '#319FD3',
                        width: 1,
                    }),
                });
            },
        });

        const overlay = new Overlay({
            element: popupElement.current!,
            autoPan: {
                animation: {
                    duration: 250,
                },
            },
        });

        const newMap = new Map({
            target: mapElement.current!,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    }),
                }),
                newVectorLayer,
            ],
            view: new View({
                center: fromLonLat([-95.7129, 37.0902]), // Centered on the USA
                zoom: 4.75,
            }),
            overlays: [overlay],
        });

        const handlePointerMove = (event: any) => {
            newMap.getTargetElement().style.cursor = newMap.hasFeatureAtPixel(event.pixel) ? 'pointer' : '';
            const feature = newMap.getFeaturesAtPixel(event.pixel)[0];
            if (feature) {
                const coordinates = event.coordinate;
                const name = feature.get('name');
                const density = feature.get('density');
                setPopupContent(`State: ${name}, Density: ${density}`);
                setPopupPosition(coordinates);
                overlay.setPosition(coordinates);
            } else {
                overlay.setPosition(undefined);
            }
        };

        newMap.on('pointermove', handlePointerMove);

        setMap(newMap);
        setVectorLayer(newVectorLayer);

        return () => {
            newMap.un('pointermove', handlePointerMove);
            newMap.setTarget(undefined);
            overlay.setElement(undefined);
        };
    }, []);

    const toggleDensityLayer = () => {
        if (vectorLayer) {
            vectorLayer.setOpacity(showDensity ? 0 : 0.8);
            setShowDensity(!showDensity);
        }
    };

    return (
        <>
            <div ref={mapElement} style={{ width: '100%', height: '100vh' }} />
            <div ref={popupElement} id="popup" className="ol-popup" style={{ position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px', borderRadius: '5px', border: '1px solid black', whiteSpace: 'nowrap', transform: 'translateY(10px)' }}>
                <div>{popupContent}</div>
            </div>
            <div className="legend-container" style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <button className="toggle-button" onClick={toggleDensityLayer} style={{ marginBottom: '10px' }}>
                    {showDensity ? 'Hide' : 'Show'} Density
                </button>
                <Legend />
            </div>
        </>
    );
};

export default MapComponent;
