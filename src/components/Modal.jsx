import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <div className="modal">
      {isCorrect && (
        <div>
          <h1>You win</h1>
          <p className="solution">{solution}</p>
          <p>You find the solution in {turn} guesses !</p>
        </div>
      )}
      {!isCorrect && (
        <div>
          <h1>You lost</h1>
          <p className="solution">The solution was : {solution}</p>
        </div>
      )}
    </div>
  );
}
