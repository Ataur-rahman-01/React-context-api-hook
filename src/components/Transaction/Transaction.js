import React, { useContext } from "react";
import { Globalcontext } from "../../Context/Globalstate";

const Transaction = () => {
  const { transaction } = useContext(Globalcontext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((tr) => (
          <li className={tr.amount < 0 ? "minus" : "plus"}>
            {tr.text}{" "}
            <span>
              {tr.amount < 0 ? "-" : "+"}${Math.abs(tr.amount)}
            </span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Transaction;
