// import logo from './logo.svg';
// import './App.css';

// import Background from "./components/Background/Background";
import Registration from "./components/Registration";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import ForgetPassword from "./components/ForgetPassword";
import Layout from "./components/Layout/Layout";
import Home from "./components/Layout/Content/Home/Home";
import NewApplication from "./components/Layout/Content/NewApplication/NewApplication";
import Settings from "./components/Layout/Content/Settings/Settings";

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
        <Route path="/dashboard/" element={<Navigate to="/dashboard/home" />} />
        <Route path="/dashboard/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="newApplication" element={<NewApplication />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>

      {/* <Background>
        <Registration />
      </Background> */}
    </div>
  );
}

export default App;
