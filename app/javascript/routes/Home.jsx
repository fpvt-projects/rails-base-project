import React, { useState } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Trade from "../components/Trade";
import Portfolio from "../components/Portfolio";
import UserList from "../components/UserList";

function Home({
  userlist,
  handleRegister,
  inputFirstname,
  inputLastname,
  inputEmail,
  inputPassword,
  inputPasswordConfirmation,
}) {
  const [booladmin, setBooladmin] = useState(false);
  const navigate = useNavigate();

  const handleClickTrade = () => navigate("/trade");
  const handleClickPortfolio = () => navigate("/portfolio");
  const changeBoolAdmin = () => setBooladmin(!booladmin);

  return (
    <Container>
      <Sidebar
        handleClickTrade={handleClickTrade}
        handleClickPortfolio={handleClickPortfolio}
        changeBoolAdmin={changeBoolAdmin}
        booladmin={booladmin}
      />
      <ContentContainer>
        <Routes>
          <Route path="/trade" element={<Trade />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/user-list"
            element={
              <UserList
                booladmin={booladmin}
                userlist={userlist}
                inputFirstname={inputFirstname}
                inputLastname={inputLastname}
                inputEmail={inputEmail}
                inputPassword={inputPassword}
                inputPasswordConfirmation={inputPasswordConfirmation}
                handleRegister={handleRegister}
              />
            }
          />
        </Routes>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home;
