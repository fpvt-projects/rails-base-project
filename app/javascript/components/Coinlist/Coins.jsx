import React from "react";
import Coin from "./Coin";
import styled from "styled-components";

function Coins({ coinlist, setBuyCoinInformation }) {
  return (
    <div>
      <Coinlist>
        {coinlist.map((coin) => (
          <Coin
            key={coin.contract_id}
            currency_id={coin.currency_id}
            currency_name={coin.currency_name}
            currency_symbol={coin.currency_symbol}
            contract_id={coin.contract_id}
            total_supply={coin.total_supply}
            market_cap={coin.market_cap}
            currency_description={coin.currency_description}
            buy_price={coin.buy_price}
            setBuyCoinInformation={setBuyCoinInformation}
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

export default Coins;
