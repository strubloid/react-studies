import React, { useRef, useEffect } from 'react';
import './Map.css';

const OpenStreetMap = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
        if (window.ol){
            new window.ol.Map({
                target: mapRef.current.id,
                layers: [
                    new window.ol.layer.Tile({
                        source: new window.ol.source.OSM()
                    })
                ],
                view: new window.ol.View({
                    center: window.ol.proj.fromLonLat([center.lng, center.lat]),
                    zoom: zoom
                })
            });
        }

    }, [center, zoom]);

    return (
        <React.Fragment>
            <div
                ref={mapRef}
                className={`map ${props.className}`}
                style={props.style}
                id="map"
            ></div>
        </React.Fragment>
    );
};

export default OpenStreetMap;