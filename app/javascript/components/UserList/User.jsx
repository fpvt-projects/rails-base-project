import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User({ firstname, lastname, email, admin, id, getAllUsers }) {
  const navigate = useNavigate();

  const handleEdit = () => alert("clicked Edit");

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    confirmDelete
      ? axios
          .delete(`http://localhost:3001/api/v1/users/${id}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: sessionStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
            getAllUsers();
            navigate("/user-list");
          })
          .catch((error) => console.log(error))
      : console.log("cancel delete");
  };
  return (
    <Container>
      <Column>{firstname}</Column>
      <Column>{lastname}</Column>
      <Column>{email}</Column>
      <Column style={{ textAlign: "center" }}>{admin.toString()}</Column>
      <ActionColumn>
        <Button onClick={handleEdit}>Edit</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </ActionColumn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 34px;

  :hover {
    background-color: #e0e0e0;
  }
`;

const Column = styled.div`
  width: 20%;
  border-left: 0.5px solid #e0e0e0;
  border-right: 0.5px solid #e0e0e0;
  padding-left: 0.5rem;
  overflow: hidden;
`;

const ActionColumn = styled.div`
  width: 20%;
  border-left: 0.5px solid #e0e0e0;
  border-right: 0.5px solid #e0e0e0;
`;

const Button = styled.button`
  width: 50%;
  height: 100%;
  cursor: pointer;
`;
export default User;
