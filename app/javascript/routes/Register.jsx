import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register({
  inputEmail,
  inputLastname,
  inputFirstname,
  inputPassword,
  inputPasswordConfirmation,
  handleRegister,
}) {
  const navigate = useNavigate();
  const handleClickBack = () => navigate("/login");

  return (
    <Container>
      <FormContainer>
        <FormDiv>
          <h1 style={{ marginBottom: "20px" }}>Registration Form</h1>
          <InputDiv>
            <NameInput
              name="firstname"
              type="text"
              placeholder="Firstname"
              onChange={inputFirstname}
            />
            <NameInput
              name="lastname"
              type="text"
              placeholder="Lastname"
              onChange={inputLastname}
            />
          </InputDiv>
          <InputDiv>
            <UserInput
              name="email"
              type="text"
              placeholder="Email"
              onChange={inputEmail}
            />
          </InputDiv>
          <InputDiv>
            <UserInput
              name="password"
              type="password"
              placeholder="Password"
              onChange={inputPassword}
            />
          </InputDiv>
          <InputDiv>
            <UserInput
              name="password_confirmation"
              type="password"
              placeholder="Password Confirm"
              onChange={inputPasswordConfirmation}
            />
          </InputDiv>
          <CheckboxDiv>
            <AgreementTag>
              <InputCheckbox type="checkbox" />I have read and agree to the
              terms of agreement.
            </AgreementTag>
          </CheckboxDiv>

          <InputDiv>
            <FormButton onClick={handleRegister}>Register</FormButton>
          </InputDiv>
          <InputDiv>
            <FormButton onClick={handleClickBack}>Back</FormButton>
          </InputDiv>
        </FormDiv>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url("https://wallpaperaccess.com/full/260164.jpg");
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const FormContainer = styled.div`
  max-width: 700px;
  max-height: 400px;
  width: 50%;
  height: 50%;
  background-color: white;
  padding: 10px;
  box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 22px -2px rgba(0, 0, 0, 0.75);

  overflow-y: scroll;
  border-radius: 5px;
`;

const FormDiv = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 5px;
`;
const CheckboxDiv = styled.div`
  font-size: 14px;
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 25px 0;
`;

const NameInput = styled.input`
  height: 34px;
  padding-left: 5px;
  width: 48%;
  outline: none;
`;

const UserInput = styled.input`
  height: 34px;
  padding-left: 5px;
  width: 100%;
  outline: none;
`;

const FormButton = styled.button`
  width: 200px;
  height: 34px;
  background-color: #68d391;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
  border-radius: 3px;
  margin-left: auto;
  margin-right: auto;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    background-color: #5bba7e;
    letter-spacing: 5px;
  }
`;

const AgreementTag = styled.div`
  font-size: 14px;
`;

const InputCheckbox = styled.input`
  cursor: pointer;
  margin-right: 5px;
  font-size: 14px;
`;

export default Register;
