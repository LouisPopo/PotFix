import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Home from './routes/Home';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 100;
  }
`

export default class App extends React.Component {

    render() {
        return (
            <div>
                <GlobalStyle />
                <Home />
            </div>
        )
    }
}