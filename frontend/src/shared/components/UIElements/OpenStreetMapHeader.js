import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

class OpenStreetMapHeader extends Component {
    state = {}

    render () {
        return (
            <>
            <div id='rafa'>test new div</div>
            <Helmet defer={false}>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/css/ol.css" type="text/css" />
                <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.1.1/build/ol.js"></script>
            </Helmet>
                </>
        );
    }
}

export default OpenStreetMapHeader;