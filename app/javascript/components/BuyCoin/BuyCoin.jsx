import React from "react";
import styled from "styled-components";

function BuyCoin({}) {
  return (
    <Container>
      <BuyFormContainer>
        <h5>test</h5>
      </BuyFormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vh;
  height: 100vh;
`;

const BuyFormContainer = styled.div`
  width: 400px;
  height: 450px;
`;

export default BuyCoin;
