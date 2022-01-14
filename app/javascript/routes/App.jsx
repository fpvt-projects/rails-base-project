import React, { useState, useEffect } from "react";
import { Routes, useNavigate, Route, Navigate } from "react-router-dom";
import jwt from "jwt-decode";
import axios from "axios";
import styled from "styled-components";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";

function App() {
  const [user, setUser] = useState("");
  const [userlist, setUserlist] = useState([]);

  const [coinlist, setCointlist] = useState([]);

  // registration
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [admin, setAdmin] = useState(false);

  const navigate = useNavigate();

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

  const loginRedirect = () => {
    sessionStorage.getItem("token") != null
      ? console.log("")
      : navigate("/login");
  };

  const BASE_URL = "http://localhost:3001";

  const getAllUsers = () => {
    fetch(`${BASE_URL}/api/v1/users`, {
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
    fetch(`${BASE_URL}/api/v1/users"`, {
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
        console.log(result);
        getAllUsers;
      })
      .catch((error) => console.log(error));
  };

  const getAllCoins = () => {
    axios
      .get(`${BASE_URL}/crypto_currencies`)
      .then((res) => {
        let updatedCoinlist = [];
        res.data.data.forEach((coin) =>
          updatedCoinlist.push({
            id: coin.id,
            currency_name: coin.currency_name,
            currency_symbol: coin.currency_symbol,
            contract_id: coin.contract_id,
            total_supply: coin.total_supply,
            market_cap: coin.market_cap,
            currency_description: coin.currency_description,
            currency_price: coin.currency_price,
          })
        );
        setCointlist(updatedCoinlist);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllCoins();
    loginRedirect();
  }, []);

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
            admin={admin}
            getAllUsers={getAllUsers}
            user={user}
            getAllCoins={getAllCoins}
            coinlist={coinlist}
            BASE_URL={BASE_URL}
          />
        }
      />
      <Route
        path="/login"
        element={<Login getAllUsers={getAllUsers} BASE_URL={BASE_URL} />}
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
