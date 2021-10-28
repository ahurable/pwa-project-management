import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Board from './Board';
import data from '../assets/data.json';
import Header from '../Components/Header/Header';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family:  "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {

    const lanes = [
      {id: 1, name: "To Do"},
      {id: 2, name: "In Progress"},
      {id: 3, name: "Review"},
      {id: 4, name: "Done"}
    ]


    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Board lanes={lanes} dataSource={data} />
        </AppWrapper>
      </>
    );
  }
}

export default App;