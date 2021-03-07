import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// initial State
const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};
// create context
export const Globalcontext = createContext(initialState);
// provider component
export const GlobalProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <Globalcontext.Provider value={initialState}>
      {children}
    </Globalcontext.Provider>
  );
};
