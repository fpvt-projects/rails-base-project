import React from "react";
import styled from "styled-components";

function User({ firstname, lastname, email, admin }) {
  const handleEdit = () => alert("clicked Edit");
  const handleDelete = () => alert("clicked Delete");
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
