import React from 'react';
import styled from 'styled-components';
import Map from '../components/Map';

import { Container, Slider } from '@material-ui/core';
import heatmapDataArray from '../sample_data_2.json';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const MapContainer = styled.div`
    flex-grow: 1;
    height: 100%;
`;

const ToolboxContainer = styled.div`
    width: 300px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index: 3;
`;

const TitleContainer = styled.div`
    width: 100%;
    padding-bottom: 30px;

    h1 {
        padding-left: 15px;
    }
`;

const SectionContainer = styled.div`
    width: 100%;
    padding-bottom: 20px;

    h2 {
        padding-left: 15px;
    }
`;

export default class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            iterationToggled: true,
            iterationValue: 0,
            thresholdToggled: false,
            thresholdValue: 0,
            data: heatmapDataArray[0]
        }
        this.handleIterationChange = this.handleIterationChange.bind(this);
        this.handleThresholdChange = this.handleThresholdChange.bind(this);
    }

    handleIterationChange(event, value) {
        if (value > 0 || value < 20 && value) {
            this.setState({ iterationValue: value });
            this.setState({ data: heatmapDataArray[value-1]})
        } else {
            this.setState({ iterationValue: value });
        }
    }

    handleThresholdChange(event) {
        if (value) {

        } else {
            this.setState({ iterationValue: value });
        }
    }

    render() {
        return (
            <HomeContainer>

                <ToolboxContainer>
                    <TitleContainer>
                        <h1> Statistack</h1>
                    </TitleContainer>

                    <SectionContainer>
                        <h2>Iterations</h2>
                        <Container>
                            <Slider
                                value={this.state.iterationValue}
                                onChange={(e, val) => this.handleIterationChange(e, val)}
                                step={1}
                                marks
                                min={1}
                                max={20}
                                aria-labelledby="continuous-slider"
                            />
                        </Container>
                    </SectionContainer>

                    <SectionContainer>
                        <h2>Threshold</h2>
                        {/* <Container>
                            <Slider
                                value={this.state.thresholdValue}
                                onChange={(e) => this.handleThresholdChange(e)}
                                step={0.01}
                                min={0}
                                max={1}
                                aria-labelledby="continuous-slider"
                            />
                        </Container> */}
                    </SectionContainer>


                </ToolboxContainer>

                <MapContainer>
                    <Map data={this.state.data} /> 
                </MapContainer>
            </HomeContainer>
        )
    }
}