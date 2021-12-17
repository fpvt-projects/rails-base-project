import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateUserForm from "./UserList/CreateUserForm";

function UserList({ booladmin }) {
  const navigate = useNavigate();

  useEffect(() => {
    booladmin ? "n" : navigate("/");
  }, []);

  return (
    <Container>
      <h1>Henlo! This is from UserList.jsx!</h1>
      <CreateUserForm />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export default UserList;
