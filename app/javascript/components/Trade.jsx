import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Coins from "./Coinlist/Coins";
import UserCoins from "./UserCoins/UserCoins";
import jwt from "jwt-decode";
import CoinChart from "./CoinChart/CoinChart";

function Trade({ coinlist, getAllCoins }) {
  const [bstoggle, setBstoggle] = useState(true);
  const [currentBalance, setCurrentBalance] = useState("");

  const handleClickBuy = () => {
    setBstoggle(true);
  };
  const handleClickSell = () => {
    setBstoggle(false);
  };

  const getBalance = () => {
    //decode jsonwebtoken to get current user id
    var current_user = jwt(sessionStorage.getItem("token"));
    const user_id = current_user.sub; //sub = current user id

    axios
      .get(`http://localhost:3001/transactions/transaction_action/${user_id}`, {
        headers: { Authorization: sessionStorage.getItem("token") }, //add header authorization if controller has before_action :authenticate_user
      })
      .then((res) => {
        setCurrentBalance(res.data.data); //response.data.data = balance
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getBalance();
  }, []);

  return (
    <Container>
      <MiscContainer>
        <MiscContainerLeft>
          <CoinChart />
        </MiscContainerLeft>
        <TotalAssetContainer>
          <p>Portfolio value:</p>

          <h1>$ 32,150.59</h1>

          <p>Current balance: {currentBalance}</p>
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
            getBalance={getBalance}
            getAllCoins={getAllCoins}
          />
        ) : (
          <UserCoins getBalance={getBalance} />
        )}
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
