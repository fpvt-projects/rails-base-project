import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CreateUserForm from "./UserList/CreateUserForm";
import SearchBar from "./UserList/SearchBar";
import Users from "./UserList/Users";

function UserList({
  userlist,
  handleRegister,
  inputEmail,
  inputLastname,
  inputFirstname,
  inputPassword,
  inputPasswordConfirmation,
  getAllUsers,
  user,
}) {
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(false);

  const openSideBar = () => setSidebar(!sidebar);

  useEffect(() => {
    user.admin ? "n" : navigate("/");
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Users userlist={userlist} />
        <AddUserButton onClick={openSideBar}>+</AddUserButton>
      </ContentContainer>

      <SearchBar />
      <CreateUserForm
        inputFirstname={inputFirstname}
        inputLastname={inputLastname}
        inputEmail={inputEmail}
        inputPassword={inputPassword}
        inputPasswordConfirmation={inputPasswordConfirmation}
        handleRegister={handleRegister}
        getAllUsers={getAllUsers}
        sidebar={sidebar}
        openSideBar={openSideBar}
      />
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

const AddUserButton = styled.button`
  position: absolute;
  height: 50px;
  width: 50px;
  border: 3px soldi black;
  font-weight: bold;
  font-size: 34px;
  right: 50px;
  bottom: 50px;
`;
export default UserList;
