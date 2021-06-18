import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Thing } from '@snow-dev/snow-lib';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Thing />
      </header>
    </div>
  );
}

export default App;
