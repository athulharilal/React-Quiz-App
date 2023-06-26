import React,{useContext } from 'react'
import { QuizContext } from '../Helpers/Context'
import Quiz from './Quiz'

export default function MainMenu() {
    const {gameSate,setGameState} = useContext(QuizContext)

  return (
    <div className='Menu'>
      <button onClick={()=>{setGameState("Quiz")}}>
            Start Quiz
      </button>
    </div>
  )
} 
  