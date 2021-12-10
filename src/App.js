// import logo from './logo.svg';
// import './App.css';

import Background from "./components/Background/Background";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="customFont">
          Testing P tag Edit and save to reload.
        </p>
      </header> */}

      <Background>
        <Registration />
      </Background>
    </div>
  );
}

export default App;
