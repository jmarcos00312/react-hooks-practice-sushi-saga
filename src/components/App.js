import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import AddMoney from "./AddMoney";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [balance, setBalance] = useState(100)

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(sushiData => {
        const updatedSushi = sushiData.map(sushi => {
          return { ...sushi, isEaten: false }
        })
        setSushis(updatedSushi)
      })
  }, [])
  let currentPrice
  const handleEaten = ({ id, price }) => {
    currentPrice = price
    if (balance >= price) {
      sushis.filter(sushi => sushi.id !== id)
      setBalance(balance - price)
    }
  }




  return (
    <div className="app">
      {balance >= currentPrice ? <AddMoney /> : null}
      <SushiContainer sushis={sushis} handleEaten={handleEaten} balance={balance} />
      <Table balance={balance} />
    </div>
  );
}

export default App;
