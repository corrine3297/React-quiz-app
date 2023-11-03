import { useContext, useState } from 'react';
import './App.css';
import QuizScreen from './Components/QuizScreen';
import MainMenu from './Components/MainMenu';
import EndScreen from './Components/EndScreen';
import { QuizContext } from './ContextAPI/Contexts';
import Switch from "react-switch";

function App() {
  const [gameState, setGameState] = useState('menu');
  const [name, setName] = useState('');
  const [result, setResult] = useState(0);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(currentTheme => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <QuizContext.Provider value={{ gameState, setGameState, result, setResult, name, setName, theme, toggleTheme }}>
        <div className='d-flex flex-column' style={{ justifyContent: 'center', alignItems: 'center', height: '100vh' }} id={theme}>
          <div className='shadow p-5 border-edage card-bg'>
            <h2 className='m-2 text-center' style={{ color: 'black' }}>Smart Quiz</h2>


            {gameState === 'menu' && <MainMenu />}
            {gameState === 'quiz' && <QuizScreen />}
            {gameState === 'end' && <EndScreen />}
          </div>
          <Switch className='mt-5'onChange={toggleTheme} checked={theme==='light'}/>
        </div>
      </QuizContext.Provider>
    </>
  );
} 

export default App;
