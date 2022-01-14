import React, { useState } from "react";
import styled from "styled-components";
import jwt from "jwt-decode";
import axios from "axios";

function UserCoin({
  currency_symbol,
  currency_amount,
  getBalance,
  getOwnedCoins,
  BASE_URL,
}) {
  const [amount, setAmount] = useState("");

  const handleInput = (e) => setAmount(e.target.value);

  const setMaxAmount = () => {
    setAmount(currency_amount);
  };

  const handleSell = () => {
    var testid = jwt(sessionStorage.getItem("token"));
    const userid = testid.sub;

    let confirm = window.confirm("Confirm trade?");

    if (confirm == true) {
      axios
        .post(`${BASE_URL}/transactions`, {
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
          setAmount("");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <Container>
      <Column>{currency_symbol}</Column>
      <Column>{currency_amount}</Column>
      <Column>
        <Input type="text" value={amount} onChange={handleInput} />
      </Column>
      <ButtonColumn>
        <MaxButton onClick={setMaxAmount}>Max</MaxButton>
        <SellButton onClick={handleSell}>Sell</SellButton>
      </ButtonColumn>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Input = styled.input`
  height: 34px;
  width: 90%;
`;

const ButtonColumn = styled.div`
  width: 25%;
  display: flex;
  padding-right: 10px;
`;

const SellButton = styled.button`
  height: 34px;
  width: 50%;
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 0 5px 5px 0;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #00d832;
  color: white;

  :hover {
    background-color: #00841e;
  }
`;

const MaxButton = styled.button`
  height: 34px;
  width: 45%;
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 5px 0 0 5px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #00d832;
  color: white;

  :hover {
    background-color: #00841e;
  }
`;

export default UserCoin;
