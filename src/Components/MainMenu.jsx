import React, { useContext } from 'react'
import { QuizContext } from '../ContextAPI/Contexts'

function MainMenu() {
    const {gameState, setGameState}=useContext(QuizContext)
    const gameStart = () => {
        setGameState('quiz')
        
    }

    return (
        <div>
            <button onClick={gameStart} className='btn btn-success'>Start Quiz</button>
        </div>
    )
}

export default MainMenu