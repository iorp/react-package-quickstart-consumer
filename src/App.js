import logo from './logo.svg';
import './App.css';
// import {DemoButton,DemoButtonA} from 'demo-lib'; // Import the DemoButton component
//import {DemoButton,DemoButtonA} from 'clr-lib'; // Import the DemoButton component
//import {DemoButton,DemoButtonA} from '@monorepo/package2'; // Import the DemoButton component
import {DemoButton,DemoButtonA} from '@naut/components'; // Import the DemoButton component

function App() {
  return (
    <div className="App">
       
       <DemoButton text="Click Me" />
       <DemoButtonA text="Click Me" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
