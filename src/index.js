import React from "react";
import ReactDOM from "react-dom";
import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const verificar = (num) => () => {
    if (num1 === 0) {
      setNum1(num);
    } else if (num2 === 0) {
      setNum2(num);
    }
    
  };

  const sumar = () => {
    setResult(num1 + num2);
  };
  const restar = () => {
    setResult(num1 - num2);
  };
  const multiplicar = () => {
      setResult(num1 * num2);
  };
  const dividir = () => {
    setResult(num1 / num2);
  };
  const resetear = () => {
    setNum1(0)
    setNum2(0)
    setResult(0)
  };

  return (
    <div>
      <div>
        <p>{num1} {num2} =  {result}</p>
      </div>
      <div>
        <button onClick={verificar(1)}>1</button>
        <button onClick={verificar(2)}>2</button>
        <button onClick={verificar(3)}>3</button>
      </div>
      <div>
        <button onClick={verificar(4)}>4</button>
        <button onClick={verificar(5)}>5</button>
        <button onClick={verificar(6)}>6</button>
      </div>
      <div>
        <button onClick={verificar(7)}>7</button>
        <button onClick={verificar(8)}>8</button>
        <button onClick={verificar(9)}>9</button>
      </div>
      <div>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={multiplicar}>*</button>
        <button onClick={dividir}>/</button>

        <button type="reset" onClick={resetear}>CA</button>
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Calculator />, rootElement);