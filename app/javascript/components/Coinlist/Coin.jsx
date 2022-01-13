import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BuyCoin from "../BuyCoin/BuyCoin";

function Coin({
  currency_name,
  currency_id,
  currency_symbol,
  contract_id,
  total_supply,
  market_cap,
  currency_description,
  buy_price,
  setBuyCoinIformation,
}) {
  const [showBuyForm, setShowBuyForm] = useState(false);

  const toggleBuyForm = () => {
    setShowBuyForm(!showBuyForm);
  };

  useEffect(() => {}, []);

  const setThisCoin = () => {
    if (showBuyForm == true) {
      setBuyCoinIformation([
        {
          currency_name: currency_name,
          currency_id: currency_id,
          currency_symbol: currency_symbol,
          contract_id: contract_id,
          total_supply: total_supply,
          market_cap: market_cap,
          currency_description: currency_description,
          buy_price: buy_price,
        },
      ]);
    } else {
      setBuyCoinIformation([]);
    }
  };
  return (
    <Container onClick={toggleBuyForm}>
      {showBuyForm ? <BuyCoin /> : console.log("")}
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

export default Coin;
