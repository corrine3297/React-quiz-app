import { useContext, useState } from 'react';
import './App.css';
import QuizScreen from './Components/QuizScreen';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './ContextAPI/Contexts';

function App() {
  const [gameState, setGameState] = useState('menu')
   return (
    <>
      <div>
        <h2>Quiz App</h2>
        <QuizContext.Provider value={{gameState,setGameState}}>
          {gameState === 'menu' && <MainMenu />}
          {gameState === 'quiz' && <QuizScreen />}
          {gameState === 'end' && <EndScreen />}
        </QuizContext.Provider>
      </div>
    </>
  );
}

export default App;
