import React, { useRef, useEffect } from "react";

import { Helmet } from 'react-helmet'

import './Map.css'

const GoogleMap = (props) => {

    const mapRef = useRef();
    const { center, zoom } = props;
    const GApiKey='AIzaSyBsZDaKlY-nQJB9Lf_-ZePhJa2aoquT0zg';

    // when the dependency changes, this function will be running
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
        new window.google.maps.Marker({ position: center, map: map });
    }, [center,zoom]);

    // Adding the header of the Google Maps
    props.addHeader(['<script defer src="`https://maps.googleapis.com/maps/api/js?key=${GApiKey}`"></script>']);

    return (
        <React.Fragment>
            <div ref={mapRef}
                 className={`map ${props.className}`}
                 style={props.style}
            ></div>
        </React.Fragment>
    );
};

export default GoogleMap;
