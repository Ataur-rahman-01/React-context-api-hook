import React from "react";
import AddTransaction from "./components/AddTransaction/AddTransaction";
import Blance from "./components/Blance/Blance";
import Header from "./components/Header/Header";
import Income from "./components/Income/Income";
import Transaction from "./components/Transaction/Transaction";
import { GlobalProvider } from "./Context/Globalstate";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Blance />
          <Income />
          <Transaction />
          <AddTransaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
