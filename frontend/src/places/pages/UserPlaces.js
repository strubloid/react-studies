import React from 'react';

import PlaceList from '../components/PlaceList';
import { useParams } from 'react-router-dom';

const UserPLaces = (props) => {

    const places = [
        {
            id: 'p1',
            title: 'Rafael house',
            description: 'A cool place to chill',
            imageUrl: 'https://maps.gstatic.com/tactile/pane/default_geocode-1x.png',
            address: '33 Oak Apple Green Rathfarnham Dublin 6',
            location : {
                lat: 53.3113766,
                lng: -6.2746052,
            },
            creator: 'u1'
        },
        {
            id: 'p2',
            title: 'Empire State Building',
            description: 'Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipOUyj7983L9cDPGUUsm_c1-KWrR2B80LhxOfBQZ=w433-h240-k-no',
            address: '20 W 34th St, New York, NY 10001, United States',
            location : {
                lat: 40.7484445,
                lng: -73.9878531,
            },
            creator: 'u2'
        }
    ]

    const userId = useParams().userId;
    const filteredPlaces = places.filter( place => place.creator === userId);

    return (
        <PlaceList items={filteredPlaces} />
    );
};

export default UserPLaces;
