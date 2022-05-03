import React, { useEffect } from "react";
import useWorlde from "../hooks/useWorlde";
import Grid from "./Grid";

export default function Wordle({ solution }) {
  const { currentGuess, handleKeyup, guesses, isCorrect, turn } =
    useWorlde(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKeyup);

    return () => window.removeEventListener("keyup", handleKeyup);
  }, [handleKeyup]);

  useEffect(() => {
    console.log(guesses, "turn : " + turn, "is correct : " + isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <div>
      <div>current guess - {currentGuess}</div>
      <div className="solution">solution is - {solution}</div>
      <Grid
        currentGuess={currentGuess}
        guesses={guesses}
        turn={turn}
        solution={solution}
      />
    </div>
  );
}
