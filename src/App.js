import React from 'react';
import './style.css';
import { useState } from 'react';
import WinnerComp from './WinnerComp';

export default function App() {
  const [ticTac, setTicTac] = useState(Array(9).fill(null));
  let winner = WinnerComp(ticTac);
  const setSign = () => {
    if (winner) {
      return `Winner is ${winner}`;
    } else if (ticTac.filter(Boolean).length % 2 == 0) {
      return 'X';
    } else {
      return 'O';
    }
  };
  function nextTurn(x) {
    if (winner) return;
    ticTac[x] = setSign();
    setTicTac([...ticTac]);
  }
  const square = (x) => {
    return (
      <div className="box" onClick={() => nextTurn(x)}>
        {ticTac[x]}
      </div>
    );
  };
  const resetBtn = () => {
    setTicTac(Array(9).fill(null));
  };
  return (
    <div>
      <div className="container">
        {square(0)}
        {square(1)}
        {square(2)}
      </div>
      <div className="container">
        {square(3)}
        {square(4)}
        {square(5)}
      </div>
      <div className="container">
        {square(6)}
        {square(7)}
        {square(8)}
      </div>
      <div>
        <div>{`${setSign()}`}</div>
      </div>
      <div>
        <button onClick={() => resetBtn()}>Reset</button>
      </div>
    </div>
  );
}
