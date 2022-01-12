import React, { useState } from "react";
import styled from "styled-components";
import UserCoin from "./UserCoin";

function UserCoins() {
  const [userCoins, setUserCoins] = useState([
    {
      currency_name: "dogecoin",
      currency_id: "DOGE",
      currency_symbol: "DOGE",
      contract_id: "3",
      total_supply: "56",
      market_cap: "25",
      currency_description: "This is dogecoin",
      buy_price: "4",
    },
  ]);

  return (
    <div>
      <Coinlist>
        {userCoins.map((coin) => (
          <UserCoin
            key={coin.contract_id}
            currency_id={coin.currency_id}
            currency_name={coin.currency_name}
            currency_symbol={coin.currency_symbol}
            contract_id={coin.contract_id}
            total_supply={coin.total_supply}
            market_cap={coin.market_cap}
            currency_description={coin.currency_description}
            buy_price={coin.buy_price}
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

export default UserCoins;
