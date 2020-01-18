import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

const heatmapData = [
    { lat: 37.782, lng: -122.447, weight: 5 },
    { lat: 37.782, lng: -122.443, weight: 5 },
    { lat: 37.782, lng: -122.441, weight: 5 },
    { lat: 37.782, lng: -122.439, weight: 5 },
    { lat: 37.782, lng: -122.435, weight: 5 },
    { lat: 37.785, lng: -122.447, weight: 5 },
    { lat: 37.785, lng: -122.445, weight: 5 },
    { lat: 37.785, lng: -122.441, weight: 5 },
    { lat: 37.785, lng: -122.437, weight: 5 },
    { lat: 37.785, lng: -122.435, weight: 5 }
];

const Map = compose(
    withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => 
    <GoogleMap
        defaultZoom={14}
        // Centre cote des neiges
        // defaultCenter={{ lat: 45.504136, lng: -73.614522 }}
        defaultCenter={{ lat: 37.782, lng: -122.447 }}
    >
        <HeatmapLayer
            data={props.data.map(function(p) {
                return {
                    location: new google.maps.LatLng(p.lat, p.lng),
                    weight: p.weight
                }
            })}

            options={{
                radius: 20,
                opacity: 0.5,
            }}
        />
    </GoogleMap>  
);

export default class MapContainer extends React.Component {
    render() {
        return (
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCZubQYc2srdfMo0lxnZOc0ZgqxgQEy2Cw&v=3.exp&libraries=geometry,drawing,places,visualization"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `700px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                data={heatmapData}
            />
        )
    }
}