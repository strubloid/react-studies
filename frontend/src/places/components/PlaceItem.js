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

    let headers = [];
    const addHeaderHandler = (newHeader) => {
        headers.concat(newHeader);
    }

    return (
        <React.Fragment>
            <Helmet>
                {
                    headers.map( header => (header))
                }
            </Helmet>
            <Modal
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>Close</Button>}
            >
                <div className="map-container">
                    <OpenStreetMap addHeader={addHeaderHandler} center={props.coordinates} zoom={16}/>
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
                        <Button to={`/places/${props.id}`}>Edit</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
        </React.Fragment>
    );
};
export default PLaceItem;
