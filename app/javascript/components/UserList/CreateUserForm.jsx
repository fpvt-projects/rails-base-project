import React, { useState, useEffect } from "react";
import styled from "styled-components";

function CreateUserForm({ handleRegister }) {
  const [sidebar, setSidebar] = useState(false);

  const OpenSideBar = () => setSidebar(!sidebar);

  const ClearForm = () => alert("Form cleared!");

  useEffect(() => {
    if (sidebar == true) {
      document.getElementById("Container").style.right = "0";
    } else {
      document.getElementById("Container").style.right = "-50%";
    }
  }, [sidebar]);

  return (
    <div id="Container" style={Container}>
      <FormContainer>
        <h1 style={{ marginBotton: "10px" }}>ADD NEW USER</h1>
        <UserInput type="text" placeholder="Firstname" />
        <UserInput type="text" placeholder="Lastname" />
        <UserInput type="text" placeholder="Email" />
        <UserInput type="password" placeholder="Password" />
        <UserInput type="password" placeholder="Password confirmation" />
        <SubmitBttn onClick={handleRegister}>Save</SubmitBttn>
        <ClearBttn onClick={ClearForm}>Clear</ClearBttn>
      </FormContainer>

      <OpenSideBarButton
        sidebar={sidebar}
        onClick={OpenSideBar}
      ></OpenSideBarButton>
    </div>
  );
}

const Container = {
  width: "50%",
  height: "100%",
  backgroundColor: "#E0E0E0",
  position: "absolute",
  transition: "all 0.3s ease",
  right: "-50%",
};

const OpenSideBarButton = styled.button`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #e0e0e0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  left: -75px;
  outline: none;
  border: none;

  clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);

  :hover {
    background-color: grey;
  }
`;

const FormContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;
const UserInput = styled.input`
  height: 34px;
  padding-left: 5px;
  width: 100%;
  outline: none;
  margin: 5px;
`;

const SubmitBttn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  height: 34px;
  width: 200px;

  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #68d391;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: all 0.4s ease;

  :hover {
    background-color: #60bc82;
  }
`;

const ClearBttn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  height: 34px;
  width: 200px;

  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #ff5656;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: all 0.4s ease;

  :hover {
    background-color: #db1a1a;
  }
`;
export default CreateUserForm;
