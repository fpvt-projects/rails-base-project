import React from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import Wallet from "../components/Wallet";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/sign_up");

  const handleClickDashboard = () => navigate("/dashboard");
  const handleClickWallet = () => navigate("/wallet");

  return (
    <Container>
      <Sidebar
        handleClickDashboard={handleClickDashboard}
        handleClickWallet={handleClickWallet}
      />
      <ContentContainer>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wallet" element={<Wallet />} />
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

const ContentContainer = styled.div``;

export default Home;
