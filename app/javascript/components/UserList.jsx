import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateUserForm from "./UserList/CreateUserForm";
import SearchBar from "./UserList/SearchBar";

function UserList({ booladmin }) {
  const navigate = useNavigate();

  useEffect(() => {
    booladmin ? "n" : navigate("/");
  }, []);

  const LoadUsers = () => {
    fetch("http://localhost:3000/api/v1/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    LoadUsers;
  }, []);

  return (
    <Container>
      <h1>Henlo! This is from UserList.jsx!</h1>
      <SearchBar />
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
