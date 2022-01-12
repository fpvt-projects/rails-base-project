import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Coins from "./Coinlist/Coins";
import UserCoins from "./UserCoins/UserCoins";

function Trade({ setBuyCoinInformation }) {
  const [bstoggle, setBstoggle] = useState(true);

  const handleClickBuy = () => {
    setBstoggle(true);
  };
  const handleClickSell = () => {
    setBstoggle(false);
  };

  // useEffect(() => {
  //   toggleBuyandSell;
  // });

  // const toggleBuyandSell = () => {
  //   if ((bstoggle = true)) {
  //     document.getElementsByClassName("marketcoins").style.display = "block";
  //     document.getElementsByClassName("usercoins").style.display = "none";
  //   } else {
  //     document.getElementsByClassName("marketcoins").style.display = "none";
  //     document.getElementsByClassName("usercoins").style.display = "block";
  //   }
  // };

  const [coinlist, setCoinlist] = useState([
    {
      currency_name: "bitcoin",
      currency_id: "btc",
      currency_symbol: "btc",
      contract_id: "1",
      total_supply: "10",
      market_cap: "5",
      currency_description: "This is bitcoin",
      buy_price: "3",
    },
    {
      currency_name: "ethereum",
      currency_id: "eth",
      currency_symbol: "eth",
      contract_id: "2",
      total_supply: "5",
      market_cap: "2",
      currency_description: "This is ethereum",
      buy_price: "1",
    },
  ]);
  return (
    <Container>
      <MiscContainer>
        <MiscContainerLeft>
          <GraphGIF src="https://c.mql5.com/31/434/heikin-ashi-premium-screen-2254.gif" />
        </MiscContainerLeft>
        <TotalAssetContainer>
          <p>Portfolio value:</p>

          <h1>$ 32,150.59</h1>
        </TotalAssetContainer>
      </MiscContainer>
      <MarketContainer>
        <Navbar>
          <NavButtons onClick={handleClickBuy}>Buy</NavButtons>
          <NavButtons onClick={handleClickSell}>Sell</NavButtons>
        </Navbar>

        {bstoggle ? (
          <Coins
            coinlist={coinlist}
            setBuyCoinInformation={setBuyCoinInformation}
          />
        ) : (
          <UserCoins />
        )}

        {/* <div className="marketcoins">
          <Coins
            coinlist={coinlist}
            setBuyCoinInformation={setBuyCoinInformation}
          />
        </div>
        <div className="usercoins">
          <UserCoins />
        </div> */}
      </MarketContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const MiscContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
`;

const MiscContainerLeft = styled.div`
  width: 50%;
  height: 100%;
`;

const TotalAssetContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-left: 2px solid #e0e0e0;
`;

const MarketContainer = styled.div`
  width: 100%;
  height: 50%;
  border-top: 2px solid #e0e0e0;
`;

const GraphGIF = styled.img`
  height: 100%;
  width: 100%;
`;

const Navbar = styled.nav`
  height: 34px;
  width: 100%;
  background-color: white;
`;

const NavButtons = styled.button`
  border: 0;
  outline: none;
  height: 34px;
  width: 100px;
  cursor: pointer;

  :hover {
    background-color: gray;
  }
`;
export default Trade;
