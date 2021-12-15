import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Sidebar({ handleClickDashboard, handleClickWallet }) {
  const navigate = useNavigate();

  return (
    <Container>
      <UserInfo>
        <UserImage />
        <UserName>FirstName LastName</UserName>
        <Email>User@gmail.com</Email>
      </UserInfo>
      <NavigationContainer>
        <NavButton onClick={handleClickDashboard}>Dashboard</NavButton>
        <NavButton onClick={handleClickWallet}>Wallet</NavButton>
      </NavigationContainer>
    </Container>
  );
}

const Container = styled.div`
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

  :hover {
    background-color: #b2b2b2;
  }
`;

export default Sidebar;
