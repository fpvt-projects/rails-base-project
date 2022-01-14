import React from "react";
import Transaction from "./Transaction";
import styled from "styled-components";

function Transactions({ transactions }) {
  return (
    <Container>
      {transactions.map((transaction) => {
        <Transaction
          key={transaction.id}
          created_at={transaction.created_at}
          updated_at={transaction.updated_at}
          txn_type={transaction.txn_type}
          currency_symbol={transaction.currency_symbol}
          currency_amount={transaction.currency_amount}
          txn_price={transaction.txn_price}
        />;
      })}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

export default Transactions;
