import React from "react";
import styled from "styled-components";

function Transaction({
  created_at,
  updated_at,
  txn_type,
  currency_symbol,
  currency_amount,
  txn_price,
}) {
  return (
    <Container>
      <Column>{created_at}</Column>
      <Column>{updated_at}</Column>
      <Column>{txn_type}</Column>
      <Column>{currency_symbol}</Column>
      <Column>{currency_amount}</Column>
      <Column>{txn_price}</Column>
    </Container>
  );
}

const Container = styled.div`
  height: 34px;
  width: 100%;
`;

const Column = styled.div`
  width: 16.66%;
`;

export default Transaction;
