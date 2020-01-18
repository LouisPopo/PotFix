import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 45.504136, lng: -73.614522 }}
    >
    </GoogleMap>
))

export default class MapContainer extends React.Component {
    render() {
        return (
            <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZubQYc2srdfMo0lxnZOc0ZgqxgQEy2Cw&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        )
    }
}