import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userlist, setUserlist] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const inputFirstname = (e) => {
    setFirstname(e.target.value);
  };
  const inputLastname = (e) => {
    setLastname(e.target.value);
  };
  const inputEmail = (e) => {
    setEmail(e.target.value);
  };
  const inputPassword = (e) => {
    setPassword(e.target.value);
  };
  const inputPasswordConfirmation = (e) => {
    setPassword_confirmation(e.target.value);
  };

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

  const handleRegister = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_v1_users: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      }),
    })
      .then((result) => {
        console.log(result.status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Routes>
      <Route
        path="*"
        element={<Home userlist={userlist} handleRegister={handleRegister} />}
      />
      <Route path="/login" element={<Login />} />
      <Routes
        path="/sign_up"
        element={
          <Register
            inputFirstname={inputFirstname}
            inputLastname={inputLastname}
            inputEmail={inputEmail}
            inputPassword={inputPassword}
            inputPasswordConfirmation={inputPasswordConfirmation}
            handleRegister={handleRegister}
          />
        }
      />
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
