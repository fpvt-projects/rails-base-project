import React from "react";
import Transaction from "./Transaction";
import styled from "styled-components";

function Transactions({ transactions }) {
  return (
    <Container>
      <Header>
        <Column>Date</Column>
        <Column>Type</Column>
        <Column>Currency NAME</Column>
        <Column>Amount</Column>
        <Column>Currency Price</Column>
      </Header>
      <TransactionContainer>
        {transactions.reverse().map((x) => (
          <Transaction
            key={x.id}
            created_at={x.created_at}
            txn_type={x.txn_type}
            currency_symbol={x.currency_symbol}
            currency_amount={x.currency_amount}
            txn_price={x.txn_price}
          />
        ))}
      </TransactionContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Header = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  background-color: #a0a0a0;
  color: white;
  padding: 5px 0;
`;

const Column = styled.div`
  width: 20%;
  height: 100%;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  padding-left: 5px;
`;

const TransactionContainer = styled.div`
  width: 100%;
  height: 95%;
  overflow-y: scroll;
`;

export default Transactions;
