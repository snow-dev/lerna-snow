import logo from './logo.svg';
import './App.css';

import { Thing } from '@snow-dev/snow-lib';

function AppJs() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Thing>
          <h1>The thing an JS!</h1>
        </Thing>
      </header>
    </div>
  );
}

export default AppJs;
