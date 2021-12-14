import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //   loggedIn ? null : navigate("/login");
  // }, [loggedIn]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign_up" element={<Register />} />
    </Routes>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`;
export default App;
