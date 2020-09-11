import React, { useRef, useEffect } from "react";
import './Map.css'

const GoogleMap = (props) => {

    const mapRef = useRef();
    const { center, zoom } = props;

    // when the dependency changes, this function will be running
    useEffect(() => {
        const map = new window.google.maps.Map(mapRef.current, {
            center: center,
            zoom: zoom
        });
        new window.google.maps.Marker({ position: center, map: map });
    }, [center,zoom]);

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
