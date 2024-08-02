/* eslint-disable no-unused-vars */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import LandingPage from "./pages/mainLanding/LandingPage";
import CreateEvent from "./pages/createEvent/CreateEvent";
import MyEvents from "./pages/myEvents/MyEvents";
import RegisterEvent from "./pages/registerEvent/RegisterEvent";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/landing" element={<LandingPage />}></Route>
          <Route path="/createevent" element={<CreateEvent />}></Route>
          <Route path="/myevents" element={<MyEvents />}></Route>
          <Route path="/registerevent" element={<RegisterEvent />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
