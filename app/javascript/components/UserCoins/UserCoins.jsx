import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UserCoin from "./UserCoin";
import jwt from "jwt-decode";

function UserCoins({ getBalance }) {
  const [userCoins, setUserCoins] = useState([]);

  const getOwnedCoins = () => {
    var testid = jwt(sessionStorage.getItem("token"));
    const userid = testid.sub;

    axios
      .get(`http://localhost:3001/portfolios/see_owned/${userid}`)
      .then((res) => {
        console.log(res.data.data);
        let updatedownedcoins = [];

        res.data.data.forEach((coin) => {
          updatedownedcoins.push({
            id: coin.id,
            currency_symbol: coin.currency_symbol,
            currency_amount: coin.currency_amount,
          });
        });
        setUserCoins(updatedownedcoins);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getOwnedCoins();
  }, []);

  return (
    <div>
      <Header>
        <Column>Name</Column>
        <Column>Amount Owned</Column>
        <Column>Amount</Column>
        <Column>Action</Column>
      </Header>
      <Coinlist>
        {userCoins.map((coin) => (
          <UserCoin
            key={coin.id}
            currency_symbol={coin.currency_symbol}
            currency_amount={coin.currency_amount}
            getBalance={getBalance}
            getOwnedCoins={getOwnedCoins}
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
  width: 25%;
`;

export default UserCoins;
