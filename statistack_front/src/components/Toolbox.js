import React from 'react';
import styled from 'styled-components';

const ToolboxContainer = styled.div`
    width: 300px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    z-index: 3;
`;

export default class Toolbox extends React.Component {
    render() {
        return (
            <ToolboxContainer>

            </ToolboxContainer>
        )
    }
}