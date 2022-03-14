import React, { useState } from "react";
function Veg() {
  const [tomatoes, setTomatoes] = useState(10);
  const [potato, setPotato] = useState(8);
  const [carrots, setCarrots] = useState(5);
  const [onions, setOnions] = useState(7);
  function add(setStt, stt) {
    setStt(stt + 1);
  }
  function sub(setStt, stt) {
    setStt(stt - 1);
  }
  return (
    <div>
      <div>
        <h1>Tomatoes:{tomatoes} kg</h1>
        <button onClick={() => add(setTomatoes, tomatoes)}>+</button>
        <button onClick={() => sub(setTomatoes, tomatoes)}>-</button>
      </div>
      <div>
        <h1>Potatoes:{potato} kg</h1>
        <button onClick={() => add(setPotato, potato)}>+</button>
        <button onClick={() => sub(setPotato, potato)}>-</button>
      </div>
      <div>
        <h1>Carrots:{carrots} kg</h1>
        <button onClick={() => add(setCarrots, carrots)}>+</button>
        <button onClick={() => sub(setCarrots, carrots)}>-</button>
      </div>
      <div>
        <h1>Onions:{onions} kg</h1>
        <button onClick={() => add(setOnions, onions)}>+</button>
        <button onClick={() => sub(setOnions, onions)}>-</button>
      </div>
    </div>
  );
}
export default Veg;
