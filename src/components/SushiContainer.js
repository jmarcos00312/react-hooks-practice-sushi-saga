import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";


const API = "http://localhost:3001/sushis";


function SushiContainer({ sushis, handleEaten, balance }) {

  const [sushisIndex, setSushisIndex] = useState(0)

  const handleMoreClick = () => {
    setSushisIndex(prev => prev + 4)
    console.log(sushisIndex)
  }

  const getSushis = sushis.map(sushi => {
    return <Sushi sushi={sushi} key={sushi.id} handleEaten={handleEaten} balance={balance} />
  })
  let fourMore = sushisIndex + 4




  return (
    <div className="belt">
      {getSushis.slice(sushisIndex, fourMore)}
      <MoreButton handleMoreClick={handleMoreClick} />
    </div>
  );
}

export default SushiContainer;
