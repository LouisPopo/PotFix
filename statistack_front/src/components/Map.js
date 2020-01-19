import React from 'react';
import { compose, withProps, lifecycle } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap} from "react-google-maps";
import HeatmapLayer from "react-google-maps/lib/components/visualization/HeatmapLayer";

// import heatmapData from './sample_data.json';

const Map = compose(
    withProps({
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    lifecycle({
        componentWillReceiveProps(nextProps) {
            if (nextProps != this.props) {
                this.props = nextProps
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => 
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 45.504136, lng: -73.614522 }}
        defaultOptions={{
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false
        }}
    >
        <HeatmapLayer
            data={props.data.map(function(p) {
                if (p.weight > props.threshold) {
                    return {
                        location: new google.maps.LatLng(p.lat, p.lng),
                        weight: p.weight
                    }
                }
            })}

            options={{
                radius: 10,
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
                data={this.props.data}
                threshold={this.props.threshold}
            />
        )
    }
}