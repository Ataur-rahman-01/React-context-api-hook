import React, { useContext } from "react";
import { Globalcontext } from "../../Context/Globalstate";

const Blance = () => {
  const { transaction } = useContext(Globalcontext);
  const amounts = transaction.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Blance;
