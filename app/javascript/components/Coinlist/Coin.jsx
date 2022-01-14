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
  getAllCoins,
  getBalance,
  user,
}) {
  const [amount, setAmount] = useState("");

  const handleInput = (e) => {
    setAmount(e.target.value);
  };

  const handleBuy = () => {
    // var testid = jwt(sessionStorage.getItem("token"));
    // const userid = testid.sub;
    const userid = user.id;

    let confirm = window.confirm("Confirm Trade?");

    if (confirm == true) {
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
          getAllCoins();
          getBalance();
          setAmount("");
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <ColumnCurrencyName>
        {currency_name}
        <ContractID>{contract_id}</ContractID>
      </ColumnCurrencyName>
      <Column>{currency_symbol}</Column>
      <Column>{total_supply}</Column>
      <Column>{market_cap}</Column>
      <Column>{currency_price}</Column>
      <Column>
        <Input type="text" value={amount} onChange={handleInput} />
      </Column>
      <Column>
        <Button amount={amount} onClick={handleBuy}>
          Buy
        </Button>
      </Column>
    </Container>
  );
}

const Container = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 0.5rem;
  overflow: hidden;

  background-color: #efefef;

  :hover {
    background-color: #e0e0e0;
  }
`;
const ColumnCurrencyName = styled.div`
  padding: 0 1rem;
  width: 14.29%;
  overflow: hidden;
  diplay: flex;
  flex-direction: column;
`;

const Column = styled.div`
  padding: 0 1rem;
  width: 14.29%;
  overflow: hidden;
`;

const Input = styled.input`
  height: 30px;
  width: 100%;
  padding-right: 5px;
  text-align: right;
`;

const Button = styled.button`
  height: 34px;
  width: 100%;
  outline: none;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: red;
  color: white;

  :hover {
    background-color: #9b0606;
  }
`;

const ContractID = styled.p`
  margin-top: 3px;
  font-size: 10px;
`;
export default Coin;
