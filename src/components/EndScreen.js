import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QuestionBank";
import "../App.css";

function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext)

  const restartQuiz = () => {
    setScore(0)
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>You have arrived at the end of the Quiz</h1>
      <h3>You have gotten: {score} right out of: {Questions.length} Questions </h3>
      <button onClick={restartQuiz}>restartQuiz</button>
    </div>
  )
}

export default EndScreen;