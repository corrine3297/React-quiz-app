import React, { useState } from 'react'
import { Questions } from '../ContextAPI/Questions'


function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                <h1>{Questions[currentQuestion].question}</h1>
                <div className='d-flex flex-column' style={{width:'250px'}}>
                    <button className='btn btn-success my-3'>{Questions[currentQuestion].optionA}</button>
                    <button className='btn btn-success my-3'>{Questions[currentQuestion].optionB}</button>
                    <button className='btn btn-success my-3'>{Questions[currentQuestion].optionC}</button>
                    <button className='btn btn-success my-3'>{Questions[currentQuestion].optionD}</button>
                </div>
            </div>

        </>
    )
}

export default QuizScreen