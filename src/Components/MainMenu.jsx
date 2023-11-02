import React, { useContext, useState } from 'react';
import { QuizContext } from '../ContextAPI/Contexts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MainMenu() {
    const { gameState, setGameState, name, setName } = useContext(QuizContext)

    const gameStart = () => {
        console.log(name)
        if (name) {
            setGameState('quiz')
        }
        else{
            toast.warning("Please enter name to start game")
        }


    }

    return (
        <div className='mt-5' style={{ width: '350px'}}>
            <input type="text" onChange={(e) =>{setName(e.target.value)} } className='form-control' placeholder='Enter your name' />
            <div className='d-grid mb-4'>
                <button onClick={gameStart} className='btn btn-outline-dark fw-bolder fs-6 mt-4'>Start Quiz</button>
            </div>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
        </div>
    )
}

export default MainMenu