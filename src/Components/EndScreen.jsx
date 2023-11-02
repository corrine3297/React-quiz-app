import React, { useContext } from 'react'
import { QuizContext } from '../ContextAPI/Contexts';
import { Questions } from '../ContextAPI/Questions';


function EndScreen() {
    const { result, setResult, setGameState,name } = useContext(QuizContext)
    const startAgain = () => {
        setGameState('menu')
        setResult(0)
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center' style={{width:'400px'}}>
            <h4 className='text center mt-4'>Quiz finished</h4>
            <h5 className='mt-3'>
               <span style={{color:'red'}}>{name}'s</span> score is {result} / {Questions.length}
            </h5>
            <div>
                <button onClick={startAgain} className='btn btn-outline-dark fw-bolder fs-6 mt-5'>Start Again</button>
            </div>
        </div>
    )
}

export default EndScreen