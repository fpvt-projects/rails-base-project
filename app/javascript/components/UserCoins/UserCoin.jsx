import React from "react";
import styled from "styled-components";

function UserCoin({
  currency_name,
  currency_id,
  currency_symbol,
  contract_id,
  total_supply,
  market_cap,
  currency_description,
  buy_price,
}) {
  return (
    <Container>
      <Column>{currency_name}</Column>
      <Column>{currency_id}</Column>
      <Column>{currency_symbol}</Column>
      <Column>{contract_id}</Column>
      <Column>{total_supply}</Column>
      <Column>{market_cap}</Column>
      <Column>{currency_description}</Column>
      <Column>{buy_price}</Column>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 34px;
  display: flex;
  cursor: pointer;
  padding-left: 0.5rem;
  overflow: hidden;
  position: relative;
  background-color: #efefef;

  :hover {
    background-color: #e0e0e0;
  }
`;

const Column = styled.div`
  width: 12.5%;
`;

export default UserCoin;
