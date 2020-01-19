import React from 'react';
import styled from 'styled-components';
import Toolbox from '../components/Toolbox';
import Map from '../components/Map';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MapContainer = styled.div`
    flex-grow: 1;
    height: 100%;
`;

export default class Home extends React.Component {
    render() {
        return (
            <HomeContainer>
                <Toolbox/>

                <MapContainer>
                    <Map />
                </MapContainer>
            </HomeContainer>
        )
    }
}