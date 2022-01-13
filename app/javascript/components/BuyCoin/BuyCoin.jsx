import React from "react";
import styled from "styled-components";

function BuyCoin({}) {
  return (
    <Container>
      <BuyFormContainer>
        <h5>this is from buy form</h5>
      </BuyFormContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-idex: 1;
`;

const BuyFormContainer = styled.div`
  width: 400px;
  height: 450px;
`;

export default BuyCoin;
