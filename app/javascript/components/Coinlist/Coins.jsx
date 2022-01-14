import React from "react";
import Coin from "./Coin";
import styled from "styled-components";

function Coins({
  coinlist,
  setBuyCoinInformation,
  getBalance,
  getAllCoins,
  user,
}) {
  return (
    <div>
      <Header>
        <Column>Name</Column>
        <Column>Symbol</Column>
        <Column>Total Supply</Column>
        <Column>Market Cap</Column>
        <Column>Price</Column>
        <Column>Amount</Column>
        <Column>Action</Column>
      </Header>

      <Coinlist>
        {coinlist.map((coin) => (
          <Coin
            key={coin.id}
            currency_name={coin.currency_name}
            currency_symbol={coin.currency_symbol}
            contract_id={coin.contract_id}
            total_supply={coin.total_supply}
            market_cap={coin.market_cap}
            currency_price={coin.currency_price}
            setBuyCoinInformation={setBuyCoinInformation}
            getBalance={getBalance}
            getAllCoins={getAllCoins}
            user={user}
          />
        ))}
      </Coinlist>
    </div>
  );
}

const Coinlist = styled.div`
  width: 100%;
  max-height: 70%;
  overflow-x: hidden;
  overflow-y: auto;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  font-weight: bold;
  background-color: #efefef;
  padding: 10px 0;
`;

const Column = styled.div`
  width: 14.29%;
`;

export default Coins;
