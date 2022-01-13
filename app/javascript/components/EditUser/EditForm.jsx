import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function EditForm({ openEdit, userlist, editId, getAllUsers }) {
  const [email, setEmail] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleinputfirstname = (e) => setfirstname(e.target.value);
  const handleSave = () => {
    if (firstname == "" || lastname == "" || email == "") {
      setError("Field empty!");
    } else {
      axios
        .patch(`http://localhost:3001/api/v1/users/${editId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: sessionStorage.getItem("token"),
          },
          api_v1_users: {
            email: email,
            firstname: firstname,
            lastname: lastname,
            admin: admin,
          },
        })
        .then((res) => {
          console.log(res);
          getAllUsers();
          navigate("/user-list");
          openEdit();
        })
        .catch((error) => console.log(error));
    }
  };

  const getCurrentEdit = () => {
    userlist.map((user) => {
      if (editId == user.id) {
        setEmail(user.email);
        setfirstname(user.firstname);
        setlastname(user.lastname);
        setAdmin(user.admin);
      }
    });
  };

  const setAdminType = (e) => setAdmin(e.target.value);

  useEffect(() => {
    getCurrentEdit();
  }, []);

  return (
    <Container>
      <FormContainer>
        <label>Email:</label>
        <Input type="text" value={email} onChange={handleinputfirstname} />
        <label>Firstname:</label>
        <Input type="text" value={firstname} onChange={handleinputfirstname} />
        <label>Lastname:</label>
        <Input type="text" value={lastname} onChange={handleinputfirstname} />
        <label>User-Type:</label>
        <DropdownSelect value={admin} onChange={setAdminType}>
          <option value={false}>User</option>
          <option value={true}>Admin</option>
        </DropdownSelect>
        <ButtonContainer>
          <Button onClick={handleSave}>Save</Button>
          <Button onClick={openEdit}>Back</Button>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
`;
const FormContainer = styled.div`
  height: 450px;
  width: 400px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Input = styled.input`
  height: 34px;
  width: 80%;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const DropdownSelect = styled.select`
  height: 34px;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 20px;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  height: 34px;
  width: 100px;
  padding: 0.5rem 1rem;
  border: 0;
  outline: none;
  cursor: pointer;

  :hover {
    background-color: gray;
    color: white;
  }
`;

export default EditForm;
