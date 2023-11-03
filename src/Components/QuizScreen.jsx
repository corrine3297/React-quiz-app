import React, { useContext, useState } from 'react'
import { Questions } from '../ContextAPI/Questions'
import { QuizContext } from '../ContextAPI/Contexts';
import { Col, Row } from 'react-bootstrap';
import './QuizScreen.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function QuizScreen() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const { result, setResult, setGameState } = useContext(QuizContext);
    const [isOptionSelected, setIsOptionSelected] = useState(false)

    const selectedOptions = (value) => {

        setSelectedOption(value)
        setIsOptionSelected(true)
    }

    const nextQuestion = () => {
        console.log(isOptionSelected);
        if (isOptionSelected) {
            if (Questions[currentQuestion].answer === selectedOption) {
                setResult(result + 1)
            }
            // alert(result)
            setCurrentQuestion(currentQuestion + 1)
        }
        else {
            toast.dark("Please select an option")
        }
        setIsOptionSelected(false)
    }

    const endQuiz = () => {
        console.log(isOptionSelected);
        if (isOptionSelected) {
            if (Questions[currentQuestion].answer === selectedOption) {
                setResult(result + 1)
            }
            setGameState('end')
        }
        else {
            toast.dark("Please select an option")
        }
        setIsOptionSelected(false)
       

    }

    return (
        <>
            <div className='w-100'>
                <h5 className='mt-5 mb-2 question-text' style={{ color: 'black' }}>Q. {Questions[currentQuestion].question}</h5>
                <div className='d-flex justify-content-center flex-column align-items-center' style={{ width: '400px' }}>
                    <Row className='quiz-container'>
                        <Col sm={12} md={6} className='d-grid'>
                            <button onClick={() => selectedOptions('A')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionA}</button>
                            <button onClick={() => selectedOptions('B')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionB}</button>

                        </Col>
                        <Col sm={12} md={6} className='d-grid'>
                            <button onClick={() => selectedOptions('C')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionC}</button>
                            <button onClick={() => selectedOptions('D')} className='btn btn-dark my-3 fw-bolder fs-6'>{Questions[currentQuestion].optionD}</button>
                        </Col>
                    </Row>
                    {currentQuestion == Questions.length - 1 ? (
                        <button onClick={endQuiz} className='btn btn-outline-dark mt-3' style={{ width: '200px' }} >Finish </button>
                    ) : (

                        <button onClick={nextQuestion} className='btn btn-outline-dark mt-3' style={{ width: '200px' }}>Next </button>

                    )
                    }

                </div>
                <ToastContainer position='top-center' theme='colored' autoClose={2000} />
            </div>

        </>
    )
}

export default QuizScreen