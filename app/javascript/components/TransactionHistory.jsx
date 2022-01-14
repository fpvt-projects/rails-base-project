import React, { useState, useEffect } from "react";
import axios from "axios";
import Transactions from "./Transactions/Transactions";

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  const getTradeHistory = () => {
    axios
      .get(`http://localhost:3001/transactions`)
      .then((res) => {
        let updatedTransactionlist = [];
        res.data.data.forEach((transaction) => {
          updatedTransactionlist.push({
            id: transaction.id,
            created_at: transaction.created_at,
            updated_at: transaction.updated_at,
            txn_type: transaction.txn_type,
            currency_symbol: transaction.currency_symbol,
            currency_amount: transaction.currency_amount,
            txn_price: transaction.txn_price,
          });
        });
        setTransactions(updatedTransactionlist);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTradeHistory();
  }, []);

  return (
    <div>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default TransactionHistory;
