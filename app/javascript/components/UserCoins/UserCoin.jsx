import React, { useState } from "react";
import styled from "styled-components";
import jwt from "jwt-decode";
import axios from "axios";

function UserCoin({
  currency_symbol,
  currency_amount,
  getBalance,
  getOwnedCoins,
}) {
  const [amount, setAmount] = useState("");

  const handleInput = (e) => setAmount(e.target.value);

  const handleSell = () => {
    var testid = jwt(sessionStorage.getItem("token"));
    const userid = testid.sub;

    axios
      .post("http://localhost:3001/transactions", {
        // headers: { Authorization: sessionStorage.getItem("token") },
        transaction: {
          user_id: userid,
          currency_symbol: currency_symbol,
          txn_type: "sell",
          currency_amount: amount,
        },
      })
      .then((res) => {
        console.log(res);
        getOwnedCoins();
        getBalance();
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <Column>{currency_symbol}</Column>
      <Column>{currency_amount}</Column>
      <Column>
        <input type="text" onChange={handleInput} />
      </Column>
      <Column>
        <button onClick={handleSell}>Sell</button>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
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
  width: 25%;
`;

export default UserCoin;
