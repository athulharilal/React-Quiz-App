import { useState, useContext } from "react";
import "./App.css";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("Menu");
  const [score,setScore]  = useState(0)

  return (
    <div className="App">
      <h1>Quiz app</h1>
      <QuizContext.Provider value={{ gameState, setGameState ,score,setScore}}>
        {gameState === "Menu" && <MainMenu />}
        {gameState === "Quiz" && <Quiz />}
        {gameState === "Endscreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
