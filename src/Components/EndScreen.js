import React,{useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import { Questions } from '../Helpers/QuestionBanks';


function EndScreen() {
    const {score,setScore,setGameState} = useContext(QuizContext)

    const reStartQuiz =() =>{
        setScore(0)  
        setGameState("Menu")
    } 
    

  return    <div className='EndScreen'>
                <h1>
                     Quiz Finish
                </h1>
                <h3>
                    {score} / {Questions.length}
                </h3>
                <button onClick={reStartQuiz}>
                    Restart Quiz
                </button>
            </div>;
}

export default EndScreen;
