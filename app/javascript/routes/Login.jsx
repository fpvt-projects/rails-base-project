import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ handleLogin }) {
  const [errors, setErrors] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/sign_up");
  };

  const inputUserEmail = (e) => {
    setUserEmail(e.target.value);
  };
  const inputUserPassword = (e) => {
    setUserPassword(e.target.value);
  };

  const handleClickSignIn = () => {
    axios
      .post(
        "http://localhost:3001/login",
        {
          api_v1_users: {
            email: userEmail,
            password: userPassword,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response.data);
          navigate("/");
        } else {
          setErrors(response.data.errors);
          console.log(response.data.errors);
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  return (
    <Container>
      <FormContainer>
        <InputDiv>
          <UserInput
            onChange={inputUserEmail}
            type="text"
            placeholder="Email"
          />
        </InputDiv>
        <InputDiv>
          <UserInput
            onChange={inputUserPassword}
            type="password"
            placeholder="Password"
          />
        </InputDiv>
        <InputDiv>
          <SubmitBtn onClick={handleClickSignIn}>Sign In</SubmitBtn>
        </InputDiv>
        <RegisterDiv>
          <Tag>
            Not yet a member?{" "}
            <RegisterTag onClick={handleClickRegister}>
              Click here to register.
            </RegisterTag>
          </Tag>
        </RegisterDiv>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://wallpaperaccess.com/full/260164.jpg");
  background-size: cover;
`;

const FormContainer = styled.div`
  width: 500px;
  height: 350px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputDiv = styled.div`
  width: 70%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;
`;

const RegisterDiv = styled.div`
  width: 70%;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-around;
  margin-top: 10px;
`;

const UserInput = styled.input`
  height: 34px;
  padding-left: 5px;
  width: 100%;
  outline: none;
`;

const SubmitBtn = styled.button`
  width: 250px;
  padding: 0.75rem 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: #68d391;
  border: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: #5baf7a;
  }
`;

const Tag = styled.h1`
  font-size: 14px;
  display: flex;
`;

const RegisterTag = styled.p`
  font-size: 14px;
  cursor: pointer;
  margin-left: 5px;

  :hover {
    color: #5bb9e5;
  }
`;

export default Login;
