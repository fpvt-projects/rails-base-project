import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateUserForm from "./UserList/CreateUserForm";
import SearchBar from "./UserList/SearchBar";
import Users from "./UserList/Users";

function UserList({ booladmin, userlist }) {
  // const [userList, setUserlist] = useState([
  //   {
  //     id: 1,
  //     firstname: "firstname1",
  //     lastname: "lastname1",
  //     email: "email1@gmail.com",
  //     admin: false,
  //   },
  //   {
  //     id: 2,
  //     firstname: "firstname2",
  //     lastname: "lastname2",
  //     email: "email2@gmail.com",
  //     admin: false,
  //   },
  //   {
  //     id: 3,
  //     firstname: "firstname3",
  //     lastname: "lastname3",
  //     email: "email3@gmail.com",
  //     admin: false,
  //   },
  // ]);
  const navigate = useNavigate();

  useEffect(() => {
    booladmin ? "n" : navigate("/");
  }, []);

  return (
    <Container>
      <ContentContainer>
        <h1>Henlo! This is from UserList.jsx!</h1>
        <Users userlist={userlist} />
      </ContentContainer>

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
  flex-direction: ;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 50px;
`;

export default UserList;
