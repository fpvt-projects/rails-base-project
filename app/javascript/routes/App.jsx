import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userlist, setUserlist] = useState([]);

  const navigate = useNavigate();

  // useEffect(() => {
  //   loggedIn ? null : navigate("/login");
  // }, [loggedIn]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((respose) => respose.json())
      .then((result) => {
        let updateUserlist = [];
        result.data.forEach((user) => {
          updateUserlist.push({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            admin: user.admin,
          });
          setUserlist(updateUserlist);
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <Routes>
      <Route path="*" element={<Home userlist={userlist} />} />
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
