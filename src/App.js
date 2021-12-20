// import logo from './logo.svg';
// import './App.css';

// import Background from "./components/Background/Background";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import Layout from "./components/Layout/Layout";

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
        <Route path="/registration" element={<Registration />} />
        <Route path="/forgetPassword" element={<ForgetPassword />} />
        <Route path="/dashboard" element={<Layout />} />
      </Routes>

      {/* <Background>
        <Registration />
      </Background> */}
    </div>
  );
}

export default App;
