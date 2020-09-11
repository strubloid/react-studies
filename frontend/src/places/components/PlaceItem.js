import React , {useState} from 'react';

import Card from '../../shared/components/UIElements/Card'
import Modal from '../../shared/components/UIElements/Modal'
import Button from '../../shared/components/FormElements/Button'
import GoogleMap from '../../shared/components/UIElements/GoogleMap'
import OpenStreetMap from '../../shared/components/UIElements/OpenStreetMap'

import {Helmet} from "react-helmet";

import './PlaceItem.css'

const PLaceItem = (props) => {

    const [showMap, setShowMap] = useState(false);
    const openMapHandler = () => setShowMap(true);
    const closeMapHandler = () => setShowMap(false);

    const [showGMap, setShowGMap] = useState(false);
    const openGMapHandler = () => setShowGMap(true);
    const closeGMapHandler = () => setShowGMap(false);
    const shoModal = () => {
        return showMap || showGMap ? true : false;
    }
    return (
        <React.Fragment>
            <Helmet>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css" />
                <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
                <script defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBsZDaKlY-nQJB9Lf_-ZePhJa2aoquT0zg"></script>
            </Helmet>
            <Modal
                show={shoModal()}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={ () => { closeMapHandler(); closeGMapHandler(); }}>Close</Button>}
            >
                <div className="map-container">
                    {showMap && <OpenStreetMap center={props.coordinates} zoom={16}/>}
                    {showGMap && <GoogleMap center={props.coordinates} zoom={16}/>}
                </div>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    <div className="place-item__image">
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>View on Map</Button>
                        <Button inverse onClick={openGMapHandler}>Google Maps</Button>
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};
export default PLaceItem;
