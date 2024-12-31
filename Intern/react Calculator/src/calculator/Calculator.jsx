import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput((prev) => prev + value);
    console.log(input)
  };
  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };
  const clearInput = () => {
    setInput("");
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <>
     <div className="heading">
      <h1>Calculator</h1>
     </div>
    <div className="calculator-container">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly placeholder="calculate" />
        </div>
        <div className="buttons">
          <button onClick={clearInput} className="span-two">
            C
          </button>
          <button onClick={deleteLast}>DEL</button>
          <button onClick={() => handleClick("/")}>÷</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>×</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>−</button>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("0")} className="span-two">0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
    </>
  )
};

export default Calculator;
