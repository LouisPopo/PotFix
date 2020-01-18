import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';

const HomeContainer = styled.div`
`;

const NavbarContainer = styled.div`
    height: 50px;
    width: 100%;
`;

const MapContainer = styled.div`
    width: 100%;
`;

export default class Home extends React.Component {
    render() {
        return (
            <HomeContainer>
                <NavbarContainer>

                </NavbarContainer>

                <MapContainer>
                    <Map />
                </MapContainer>
            </HomeContainer>
        )
    }
}