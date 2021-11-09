import React, { useState } from "react";

function Sushi({ sushi, handleEaten, balance }) {

  const { name, img_url, price, isEaten } = sushi


  const [eaten, setEaten] = useState(isEaten)

  const goteaten = () => {
    if (balance >= price) {
      handleEaten(sushi)
      setEaten(prev => !prev)
    }
  }






  return (
    <div className="sushi">
      <div className="plate" onClick={goteaten}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
