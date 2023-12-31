import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/QuestionBanks";
import { QuizContext } from "../Helpers/Context";

function Quiz() {
  const { score,setScore,setGameState } = useContext(QuizContext);

  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState(" ");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChoosen) {
        setScore(score+1)
    }
    setcurrentQuestion(currentQuestion+1)
  };

  const finishQuiz = ()=>{
    if (Questions[currentQuestion].answer === optionChoosen) {
        setScore(score+1)
    }
    setGameState("Endscreen")
  }
  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChoosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button
          onClick={() => setOptionChoosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button
          onClick={() => setOptionChoosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button
          onClick={() => setOptionChoosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length-1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ):(
          <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}

export default Quiz;
