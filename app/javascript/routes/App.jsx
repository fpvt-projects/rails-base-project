import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route, Navigate } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  // login and authentication
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [userlist, setUserlist] = useState([]);

  // registration

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [admin, setAdmin] = useState(false);

  // signin
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();

  const inputUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

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

  useEffect(() => {
    // componentDidMount();
    loginRedirect();
    // getAllUsers();
  }, []);

  const loginRedirect = () => {
    sessionStorage.getItem("token") != null
      ? console.log("")
      : navigate("/login");
  };

  // const handleLogin = (data) => {
  //   setisLoggedIn(true);
  //   setUser(data.user);
  //   console.log(data.user);

  //   getAllUsers();
  // };
  // const handleLogout = () => {
  //   setisLoggedIn(false);
  //   setUser("");
  // };

  const getAllUsers = () => {
    fetch("http://localhost:3001/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("token"),
      },
    })
      .then((respose) => respose.json())
      .then((result) => {
        // console.log(result);
        let updateUserlist = [];

        result.data.forEach((user) => {
          updateUserlist.push({
            id: user.id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            admin: user.admin,
          });

          var user_id = jwt(sessionStorage.getItem("token"));
          if (user.id == user_id.sub) {
            setUser(user);
          }
        });
        setUserlist(updateUserlist);
      })
      .catch((error) => console.log(error));
  };

  const handleRegister = () => {
    fetch("http://localhost:3001/api/v1/users", {
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
          admin: admin,
        },
      }),
    })
      .then((result) => {
        console.log(result.status);
        getAllUsers;
      })
      .catch((error) => console.log(error));
  };

  // const loginStatus = () => {
  //   axios
  //     .get("http://localhost:3001/logged_in", { withCredentials: true })
  //     .then((response) => {
  //       if (response.data.logged_in) {
  //         handleLogin(response);
  //       } else {
  //         handleLogout();
  //       }
  //     })
  //     .catch((error) => console.log("api errors:", error));
  // };

  // const componentDidMount = () => {
  //   loginStatus();
  // };

  // const handleLogin = () => {
  //   fetch("http://localhost:3000/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       api_v1_users: {
  //         email: userEmail,
  //         password: userPassword,
  //       },
  //     }),
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

  return (
    <Routes>
      <Route
        path="*"
        element={
          <Home
            userlist={userlist}
            handleRegister={handleRegister}
            inputFirstname={setFirstname}
            inputLastname={setLastname}
            inputEmail={setEmail}
            inputPassword={setPassword}
            inputPasswordConfirmation={setPassword_confirmation}
            setAdmin={setAdmin}
            email={email}
            firstname={firstname}
            lastname={lastname}
            password={password}
            password_confirmation={password_confirmation}
            // handleLogout={handleLogout}
            getAllUsers={getAllUsers}
            user={user}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            getAllUsers={getAllUsers}
            inputUserEmail={inputUserEmail}
            userEmail={userEmail}
            // handleLogin={handleLogin}
          />
        }
      />
      <Route
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

export default App;
