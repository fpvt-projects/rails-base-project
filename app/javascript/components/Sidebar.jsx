import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Sidebar({
  handleClickTrade,
  handleClickPortfolio,
  user,
  getAllUsers,
}) {
  const navigate = useNavigate();

  const handleClickLogout = () => navigate("/login");
  const handleClickUserlist = () => {
    getAllUsers;
    navigate("/user-list");
  };

  return (
    <Container>
      <UserInfo>
        <UserImage />
        <UserName>
          {user.firstname} {user.lastname}
        </UserName>
        <Email>{user.email}</Email>
      </UserInfo>
      <NavigationContainer>
        <NavButton onClick={handleClickTrade}>Trade</NavButton>
        <NavButton onClick={handleClickPortfolio}>Portfolio</NavButton>
        {user.admin ? (
          <UserlistButton onClick={handleClickUserlist}>
            View user list
          </UserlistButton>
        ) : (
          ""
        )}
        <NavButton onClick={handleClickLogout}>Sign Out</NavButton>
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.div`
  min-width: 300px;
  width: 300px;
  height: 100%;
  background-color: #e0e0e0;
`;

const UserInfo = styled.div`
  height: 200px;
  width: 100%;
  background-color: #e0e0e0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #b7a7a7;
`;

const UserName = styled.h1`
  font-size: 20px;
  margin-top: 1rem;
`;
const Email = styled.p`
  font-size: 14px;
`;

const NavigationContainer = styled.div`
  width: 100%;
  height: auto;
  padding-top: 2rem;
`;

const NavButton = styled.button`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background-color: #b2b2b2;
  }
`;

const UserlistButton = styled.button`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  cursor: pointer;
  text-transform: uppercase;

  :hover {
    background-color: #b2b2b2;
  }
`;

export default Sidebar;
