import React from "react";

export default function Row({ solution, guess, currentGuess }) {
  let rows = [...solution];

  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => {
          return (
            <div key={i} className={l.color}>
              {l.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, i) => {
          return (
            <div key={i} className="filled">
              {letter}
            </div>
          );
        })}
        {[...Array(solution.length - letters.length)].map((v, i) => {
          return <div key={i}></div>;
        })}
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {rows.map((s, i) => {
          if (i === 0) {
            return <div key={i}>{solution[0]}</div>;
          } else {
            return <div key={i}></div>;
          }
        })}
      </div>
    </>
  );
}
