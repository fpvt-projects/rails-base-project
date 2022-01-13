import React from "react";
import TradingViewWidget from "react-tradingview-widget";
import styled from "styled-components";

function CoinChar() {
  return <TradingViewWidget symbol="BITSTAMP:BTCUSD" autosize />;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
export default CoinChar;
