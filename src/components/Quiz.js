import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBank";
import { QuizContext } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const [curQuestion, setCurQuestion] = useState(2);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[curQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setCurQuestion(curQuestion + 1);
  };

  const finishQuiz = () => {
    
    if (curQuestion == Questions.length - 1) {
      setGameState("endScreen");
    };
  };

    return (
      <div className="Quiz">
        <h1>{Questions[curQuestion].prompt} </h1>
        <div className="options">
          <button onClick={() => setOptionChosen("A")}>
            {Questions[curQuestion].optionA}
          </button>
          <button onClick={() => setOptionChosen("B")}>
           {Questions[curQuestion].optionB}
          </button>
          <button onClick={() => setOptionChosen("C")}>
        
            {Questions[curQuestion].optionC}
          </button>
          <button onClick={() => setOptionChosen("D")}>
            
            {Questions[curQuestion].optionD}
          </button>
        </div>
        {curQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz}> Finish Quiz </button>
        ) : (
          <button onClick={nextQuestion}> Next Question</button>
        )}
      </div>
    );
  };


export default Quiz
