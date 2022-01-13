import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import jwt from "jwt-decode";

function Coin({
  currency_name,
  currency_symbol,
  contract_id,
  total_supply,
  market_cap,
  currency_price,
  setBuyCoinIformation,
  getBalance,
}) {
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [amount, setAmount] = useState("");

  const handleInput = (e) => setAmount(e.target.value);

  const handleBuy = () => {
    var testid = jwt(sessionStorage.getItem("token"));
    const userid = testid.sub;

    axios
      .post("http://localhost:3001/transactions", {
        // headers: { Authorization: sessionStorage.getItem("token") },
        transaction: {
          user_id: userid,
          currency_symbol: currency_symbol,
          txn_type: "buy",
          currency_amount: amount,
        },
      })
      .then((res) => {
        console.log(res);
        getBalance();
      })
      .catch((error) => console.log(error));
  };

  const toggleBuyForm = () => {
    setShowBuyForm(!showBuyForm);
  };

  useEffect(() => {}, []);

  return (
    <Container onClick={toggleBuyForm}>
      <Column>{currency_name}</Column>
      <Column>{currency_symbol}</Column>
      <Column>{contract_id}</Column>
      <Column>{total_supply}</Column>
      <Column>{market_cap}</Column>
      <Column>{currency_price}</Column>
      <Column>
        <input type="text" onChange={handleInput} />
      </Column>
      <Column>
        <button onClick={handleBuy}>Buy</button>
      </Column>
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

  background-color: #efefef;

  :hover {
    background-color: #e0e0e0;
  }
`;

const Column = styled.div`
  padding: 0 1rem;
  width: 12.5%;
  overflow: hidden;
`;

export default Coin;
