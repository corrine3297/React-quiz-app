import { useContext, useState } from 'react';
import './App.css';
import QuizScreen from './Components/QuizScreen';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './ContextAPI/Contexts';

function App() {
  const [gameState, setGameState] = useState('menu');
  const [name, setName] = useState('');
  const [result, setResult] = useState(0);
  return (
    <>
      <div className='d-flex flex-column' style={{ justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <div className='shadow p-5 border-edage'>
          <h2 className='m-2 text-center' style={{ color: 'black' }}>Smart Quiz</h2>
          <QuizContext.Provider value={{ gameState, setGameState, result, setResult, name, setName }}>
            {gameState === 'menu' && <MainMenu />}
            {gameState === 'quiz' && <QuizScreen />}
            {gameState === 'end' && <EndScreen />}
          </QuizContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
