import axios from "axios";
import React from "react";

function Trade({user}) {

  const checkBalance = () => {
    axios({
      method: 'get',
      url: 'localhost:3001/transactions/transaction_action/'+user.id,
      data: data
    })
  }

  return (
    <div>
      <h1>Henlo! This is from Trade!</h1>
      <button onClick={checkBalance}>Check</button>
      
    </div>
  );
}

export default Trade;
