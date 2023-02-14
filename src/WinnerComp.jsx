import React from 'react';
const winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const WinnerComp = (data) => {
  for (let i = 0; i < winner.length; i++) {
    const [a, b, c] = winner[i];
    if (data[a] && data[a] === data[b] && data[b] === data[c]) {
      return data[a];
    }
  }
  return null;
};
export default WinnerComp;
