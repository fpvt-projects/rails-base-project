import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CreateUserForm({
  handleRegister,
  inputEmail,
  inputLastname,
  inputFirstname,
  inputPassword,
  inputPasswordConfirmation,
  setAdmin,
  email,
  firstname,
  lastname,
  password,
  password_confirmation,
  admin,
  getAllUsers,
  sidebar,
  openSideBar,
  error,
  setError,
}) {
  // const [userType, setUserType] = useState("");

  // useEffect(() => {
  //   if (userType == "user") {
  //     setAdmin(false);
  //   } else {
  //     setAdmin(true);
  //   }
  // }, [userType]);

  const navigate = useNavigate();

  const selectUserType = (e) => {
    setAdmin(e.target.value);
  };

  const emtpyForm = () => {
    inputEmail("");
    inputFirstname("");
    inputLastname("");
    inputPassword("");
    inputPassword("");
    inputPasswordConfirmation("");
    setAdmin(false);
  };
  const handleClickRegister = () => {
    handleRegister();
    getAllUsers();
    emtpyForm();
    navigate("/user-list");
  };

  const handleBack = () => {
    setError("");
    openSideBar();
  };

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
        <h1
          style={{
            fontSize: "14px",
            color: "red",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          {error}
        </h1>
        <UserInput
          onChange={(e) => inputFirstname(e.target.value)}
          type="text"
          placeholder="Firstname"
          value={firstname}
        />
        <UserInput
          onChange={(e) => inputLastname(e.target.value)}
          type="text"
          placeholder="Lastname"
          value={lastname}
        />
        <UserInput
          onChange={(e) => inputEmail(e.target.value)}
          type="text"
          placeholder="Email"
          value={email}
        />
        <UserInput
          onChange={(e) => inputPassword(e.target.value)}
          type="password"
          placeholder="Password"
          value={password}
        />
        <UserInput
          onChange={(e) => inputPasswordConfirmation(e.target.value)}
          type="password"
          placeholder="Password confirmation"
          value={password_confirmation}
        />
        <DropdownSelect value={admin} onChange={selectUserType}>
          <option value={false}>User</option>
          <option value={true}>Admin</option>
        </DropdownSelect>
        <SubmitBttn onClick={handleClickRegister}>Save</SubmitBttn>
        <ClearBttn onClick={ClearForm}>Clear</ClearBttn>
        <BackBttn onClick={handleBack}>Back</BackBttn>
      </FormContainer>
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

const BackBttn = styled.button`
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  height: 34px;
  width: 200px;

  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #b7a7a7;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: bold;
  color: white;
  transition: all 0.4s ease;

  :hover {
    background-color: #8c8181;
  }
`;

const DropdownSelect = styled.select`
  height: 34px;
  cursor: pointer;
`;
export default CreateUserForm;
