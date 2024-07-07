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

const MapComponent: React.FC = () => {
    const mapElement = useRef<HTMLDivElement | null>(null);
    const popupElement = useRef<HTMLDivElement | null>(null); // Create a ref for the popup element
    const [popupContent, setPopupContent] = useState<string>('');
    const [popupPosition, setPopupPosition] = useState<number[]>([]);

    useEffect(() => {
        if (!mapElement.current || !popupElement.current) return;

        const vectorSource = new VectorSource({
            url: 'https://openlayers.org/data/vector/us-states.json',
            format: new GeoJSON(),
        });

        const vectorLayer = new VectorLayer({
            source: vectorSource,
            style: new Style({
                fill: new Fill({
                    color: 'rgba(0, 0, 255, 0.1)',
                }),
                stroke: new Stroke({
                    color: '#319FD3',
                    width: 1,
                }),
            }),
        });

        const overlay = new Overlay({
            element: popupElement.current!,
            autoPan: {
                animation: {
                    duration: 250,
                },
            },
        });

        const map = new Map({
            target: mapElement.current!,
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    }),
                }),
                vectorLayer,
            ],
            view: new View({
                center: fromLonLat([-95.7129, 37.0902]), // Centered on the USA
                zoom: 4,
            }),
            overlays: [overlay],
        });

        const handlePointerMove = (event: any) => {
            map.getTargetElement().style.cursor = map.hasFeatureAtPixel(event.pixel) ? 'pointer' : '';
            const feature = map.getFeaturesAtPixel(event.pixel)[0];
            if (feature) {
                const coordinates = event.coordinate;
                const name = feature.get('name');
                setPopupContent(`State: ${name}`);
                setPopupPosition(coordinates);
                overlay.setPosition(coordinates);
            } else {
                overlay.setPosition(undefined);
            }
        };

        map.on('pointermove', handlePointerMove);

        // Cleanup function to properly remove the map and overlay
        return () => {
            map.un('pointermove', handlePointerMove);
            map.setTarget(undefined);
            overlay.setElement(undefined);
        };
    }, []);

    return (
        <>
            <div ref={mapElement} style={{ width: '100%', height: '100vh' }} />
            <div ref={popupElement} id="popup" className="ol-popup" style={{ position: 'absolute', backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '5px', borderRadius: '5px', border: '1px solid black', whiteSpace: 'nowrap', transform: 'translateY(10px)' }}>
                <div>{popupContent}</div>
            </div>
        </>
    );
};

export default MapComponent;
