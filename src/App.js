// import logo from './logo.svg';
// import './App.css';

// import Background from "./components/Background/Background";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="customFont">
          Testing P tag Edit and save to reload.
        </p>
      </header> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        {/* <Route path="/forgot" element={<Forgot />} /> */}
      </Routes>

      {/* <Background>
        <Registration />
      </Background> */}
    </div>
  );
}

export default App;
