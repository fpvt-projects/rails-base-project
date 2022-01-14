import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Trade from "../components/Trade";
import UserList from "../components/UserList";
import TransactionHistory from "../components/TransactionHistory";

function Home({
  userlist,
  handleRegister,
  inputFirstname,
  inputLastname,
  inputEmail,
  inputPassword,
  inputPasswordConfirmation,
  setAdmin,
  email,
  firstname,
  lastname,
  password,
  password_confirmation,
  admin,
  getAllUsers,
  user,
  coinlist,
  getAllCoins,
  BASE_URL,
  error,
  setError,
}) {
  const navigate = useNavigate();

  const handleClickTrade = () => navigate("/trade");
  const handleClickHistory = () => navigate("/history");

  useEffect(() => {
    getAllUsers();
    navigate("/trade");
  }, []);

  return (
    <Container>
      <Sidebar
        handleClickTrade={handleClickTrade}
        handleClickHistory={handleClickHistory}
        user={user}
      />
      <ContentContainer>
        <Routes>
          <Route
            path="/trade/*"
            element={
              <Trade
                getAllCoins={getAllCoins}
                coinlist={coinlist}
                user={user}
                BASE_URL={BASE_URL}
              />
            }
          />
          <Route
            path="/history"
            element={<TransactionHistory user={user} BASE_URL={BASE_URL} />}
          />
          <Route
            path="/user-list"
            element={
              <UserList
                userlist={userlist}
                inputFirstname={inputFirstname}
                inputLastname={inputLastname}
                inputEmail={inputEmail}
                inputPassword={inputPassword}
                inputPasswordConfirmation={inputPasswordConfirmation}
                email={email}
                firstname={firstname}
                lastname={lastname}
                password={password}
                password_confirmation={password_confirmation}
                admin={admin}
                setAdmin={setAdmin}
                handleRegister={handleRegister}
                getAllUsers={getAllUsers}
                user={user}
                BASE_URL={BASE_URL}
                error={error}
                setError={setError}
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
