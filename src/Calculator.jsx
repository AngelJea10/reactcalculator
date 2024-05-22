import React, { useState } from 'react';
import './App.css'; 

function Calculator() {
  const [display, setDisplay] = useState("");

  const numClick = (number) => {
    setDisplay(display + number);
  };

  const operationClick = (input) => {
    let currentValue = display;

    switch (input) {
      case '%':
        currentValue = eval(currentValue) / 100;
        break;
      case '/':
      case '*':
      case '-':
      case '+':
        const lastChar = currentValue[currentValue.length - 1];
        if (['/', '*', '-', '+'].includes(lastChar)) {
          currentValue = currentValue.slice(0, -1) + input;
        } else {
          currentValue += input;
        }
        break;
      default:
        console.log('Unsupported operation:', input);
        break;
    }

    setDisplay(currentValue.toString());
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const dotDisplay = (dot) => {
    setDisplay(display + dot);
  };

  const calculate = () => {
    try {
      let result = eval(display);
      if (result === Infinity || isNaN(result)) {
        setDisplay("Cannot divide by 0");
      } else {
        setDisplay(result.toString());
      }
    } catch (error) {
      setDisplay("Error");
    }
  };

  const symbolDisplay = (symbol) => {
    if (symbol === '<') {
      let currentValue = display;
      if (currentValue.length > 0) {
        setDisplay(currentValue.slice(0, -1));
      }
    } else {
      console.log('Unsupported symbol:', symbol);
    }
  };

  return (
    <div className="container">
      <h1>My Calculator</h1>
      <div id="calculator">
        <input id="display" value={display} readOnly />
        <div id="keys">
          <button onClick={clearDisplay} className="operatorbtn">AC</button>
          <button onClick={() => symbolDisplay('<')} className="operatorbtn">DEL</button>
          <button onClick={() => operationClick('%')} className="operatorbtn">%</button>
          <button onClick={() => operationClick('/')} className="operatorbtn">/</button>
          <button onClick={() => numClick('7')}>7</button>
          <button onClick={() => numClick('8')}>8</button>
          <button onClick={() => numClick('9')}>9</button>
          <button onClick={() => operationClick('*')} className="operatorbtn">x</button>
          <button onClick={() => numClick('4')}>4</button>
          <button onClick={() => numClick('5')}>5</button>
          <button onClick={() => numClick('6')}>6</button>
          <button onClick={() => operationClick('-')} className="operatorbtn">-</button>
          <button onClick={() => numClick('1')}>1</button>
          <button onClick={() => numClick('2')}>2</button>
          <button onClick={() => numClick('3')}>3</button>
          <button onClick={() => operationClick('+')} className="operatorbtn">+</button>
          <button onClick={() => numClick('0')} className="zero">0</button>
          <button onClick={() => dotDisplay('.')} >.</button>
          <button onClick={calculate} className="operatorbtn">=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
