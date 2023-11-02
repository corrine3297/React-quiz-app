import React, { useContext, useState } from 'react'
import { Questions } from '../ContextAPI/Questions'
import { QuizContext } from '../ContextAPI/Contexts';
import { Col, Row } from 'react-bootstrap';
import './QuizScreen.css'


function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const { result, setResult, setGameState } = useContext(QuizContext);


    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === selectedOption) {
            setResult(result + 1)
        }
        // alert(result)
        setCurrentQuestion(currentQuestion + 1)
    }

    const endQuiz = () => {
        if (Questions[currentQuestion].answer === selectedOption) {
            setResult(result + 1)
        }
        setGameState('end')

    }

    return (
        <>
            <div className='d-flex flex-column justify-content-center align-items-center w-100'>
                <h5 className='mt-5 mb-2 question-text' style={{ color: 'red' }}>Q. {Questions[currentQuestion].question}</h5>
                <div className='d-flex flex-column' style={{ width: '300px' }}>
                    <Row>
                        <Col sm={12} md={6} className='d-grid'>
                            <button onClick={() => setSelectedOption('A')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionA}</button>
                            <button onClick={() => setSelectedOption('B')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionB}</button>

                        </Col>
                        <Col sm={12} md={6} className='d-grid'>
                            <button onClick={() => setSelectedOption('C')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionC}</button>
                            <button onClick={() => setSelectedOption('D')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionD}</button>
                        </Col>
                    </Row>

                </div>
                {currentQuestion == Questions.length - 1 ? (
                    <button onClick={endQuiz} className='btn btn-outline-dark mt-3' style={{ width: '200px' }} >Finish </button>
                ) : (

                    <button onClick={nextQuestion} className='btn btn-outline-dark mt-3' style={{ width: '200px' }}>Next </button>

                )
                }

            </div>

        </>
    )
}

export default QuizScreen