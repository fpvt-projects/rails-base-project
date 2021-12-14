import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register({}) {
  const navigate = useNavigate();
  const handleClickBack = () => navigate("/");
  return (
    <Container>
      <h1>This is from registration Form</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export default Register;
