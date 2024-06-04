import React from "react";

import { TextField } from "@mui/material";
import styles from "./Calculator.module.css";

const Calculator = () => {
  const [state, setState] = React.useState("");
  const [memory, memoryState] = React.useState("");
  const [operator, operatorState] = React.useState("");

  const one = () => {
    setState(state + "1");
  };
  const two = () => {
    setState(state + "2");
  };
  const tree = () => {
    setState(state + "3");
  };
  const four = () => {
    setState(state + "4");
  };
  const five = () => {
    setState(state + "5");
  };
  const six = () => {
    setState(state + "6");
  };
  const seven = () => {
    setState(state + "7");
  };
  const eight = () => {
    setState(state + "8");
  };
  const nine = () => {
    setState(state + "9");
  };
  const zero = () => {
    setState(state + "0");
  };
  const clear = () => {
    setState("");
  };

  const plus = () => {
    memoryState(state);
    operatorState("plus");
    setState("");
  };
  const minus = () => {
    memoryState(state);
    operatorState("minus");
    setState("");
  };
  const multiply = () => {
    memoryState(state);
    operatorState("multiply");
    setState("");
  };
  const division = () => {
    memoryState(state);
    operatorState("division");
    setState("");
  };
  const result = () => {
    if (operator === "plus") {
      setState(Number(memory) + Number(state));
    } else if (operator === "minus") {
      setState(Number(memory) - Number(state));
    } else if (operator === "multiply") {
      setState(Number(memory) * Number(state));
    } else if (operator === "division") {
      setState(Number(memory) / Number(state));
    }
  };
  return (
    <div>
      <div className={styles.calculator}>
      <h2>Calculator</h2>
      <TextField value={state} disabled />
      </div>
      <div className={styles.buttons}>
        <h1 onClick={one}>1</h1>
        <h1 onClick={two}>2</h1>
        <h1 onClick={tree}>3</h1>
        <h1 onClick={plus}>+</h1>
        <h1 onClick={four}>4</h1>
        <h1 onClick={five}>5</h1>
        <h1 onClick={six}>6</h1>
        <h1 onClick={minus}>-</h1>
        <h1 onClick={seven}>7</h1>
        <h1 onClick={eight}>8</h1>
        <h1 onClick={nine}>9</h1>
        <h1 onClick={multiply}>*</h1>
        <h1 onClick={clear}>C</h1>
        <h1 onClick={zero}>0</h1>
        <h1 onClick={result}>=</h1>
        <h1 onClick={division}>/</h1>
      </div>
    </div>
  );
};

export default Calculator;
