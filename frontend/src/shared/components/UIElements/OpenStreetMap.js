import React, { useRef, useEffect } from 'react';

import { Helmet } from 'react-helmet'

import './Map.css';

const Map = props => {
    const mapRef = useRef();

    const { center, zoom } = props;

    useEffect(() => {
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
    }, [center, zoom]);

    // Separating headers into variables
    const headerLink = '<link rel="stylesheet"' +
        ' href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css" />';
    const headerScript = '<script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>'

    // Adding the header of the Open Street Maps
    props.addHeader([headerLink, headerScript]);

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

export default Map;