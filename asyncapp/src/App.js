import React from 'react';
import './App.css';
import DogFinder from './components/DogFinder';
import styled from 'styled-components';

const H2 = styled.h2 `
font-family: monospace;

`



function App() {
  return (
    <div className="App">
      <H2> Dog Image Finder! </H2>
      <DogFinder />
    </div>
  );
}

export default App;
