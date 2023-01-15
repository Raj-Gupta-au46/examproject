import React from 'react'
import { useState } from 'react'
import "./Quizstyle.css"

const Quizcomponent = () => {
    var questionBank=[
        {
            Question:"What is the capital of india",
            Answers:[
                {Answer:"Delhi",isCorrect:true},
                {Answer:"Lucknow",isCorrect:false},
                {Answer:"Bharat",isCorrect:false},
                {Answer:"Pune",isCorrect:false}
            ]
        },
        {
            Question:"Which is used for responsive frontend",
            Answers:[
                {Answer:"React",isCorrect:true},
                {Answer:"Redux",isCorrect:false},
                {Answer:"Html",isCorrect:false},
                {Answer:"Nodejs",isCorrect:false}
            ]
        },
        {
            Question:"Who is the PM of India ?",
            Answers:[
                
                {Answer:"Amit Shah",isCorrect:false},
                {Answer:"Raga",isCorrect:false},
                {Answer:"Modi",isCorrect:true},
                {Answer:"Kejriwal",isCorrect:false}
            ]
        },
        {
            Question:"What is mongoose?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Library",isCorrect:true},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"What is javascript ?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Dynamic Programmimg Language",isCorrect:true},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"What is NodeJS ?",
            Answers:[
                
                {Answer:"Language",isCorrect:false},
                {Answer:"Runtime Environment",isCorrect:true},
                {Answer:"Framework",isCorrect:false},
                {Answer:"Module",isCorrect:false}
            ]
        },
        {
            Question:"Find is used for?",
            Answers:[
                
                {Answer:"Fetch all documents from DB",isCorrect:true},
                {Answer:"Finding Data",isCorrect:false},
                {Answer:"Find all only document from DB",isCorrect:false},
                {Answer:"Option not available",isCorrect:false}
            ]
        },
        {
            Question:"Express is used for?",
            Answers:[
                
                {Answer:"Building backend for web and Phones",isCorrect:true},
                {Answer:"For Https Methods",isCorrect:false},
                {Answer:"Is used for connecting nodejs to Mongodb",isCorrect:false},
                {Answer:"Option not available",isCorrect:false}
            ]
        },{
            Question:"2+3=  ?",
            Answers:[
                
                {Answer:"6",isCorrect:false},
                {Answer:"5",isCorrect:true},
                {Answer:"4.5",isCorrect:false},
                {Answer:"4.75",isCorrect:false}
            ]
        },
        {
            Question:"I am -------- Engineer?",
            Answers:[
                
                {Answer:"Fullstack",isCorrect:false},
                {Answer:"Backend",isCorrect:true},
                {Answer:"Frontend",isCorrect:false},
                {Answer:"Software",isCorrect:false}
            ]
        }
    ]
    //console.log(questionBank)
    const [currentQuestion,setCurrentQuestion]=useState(0)
    const [score,setScore]=useState(0)
    const [showScore,setShowScore]=useState(false);

    const handleAnswerResponse=(isCorrect)=>{
        if(isCorrect){
            setScore(score+1);
        }
        const nextQuestion =currentQuestion+1
        if(nextQuestion<questionBank.length)
        {
            setCurrentQuestion(nextQuestion)
        }
        else{
            setShowScore(true)
        }
    }

const resetQuiz =()=>{
    setCurrentQuestion(0)
    setScore(0)
    setShowScore(false)
}

  return (
    
    <div className='app'>
        {showScore ?(
        <div className='score-section'>
            You have scored {score} out of {questionBank.length}
            <>
                <button type='submit' onClick={resetQuiz}>Retry !</button>
                </>
        </div>)
        :(
            <>
            <div className='question-section'>

                <div className='question-count'>
                <span>{currentQuestion+1}</span>/{questionBank.length}
                
                </div>

                <div className='question-text'>
                {questionBank[currentQuestion].Question}
                </div>
            </div>

            <div className='answer-section'>
                {questionBank[currentQuestion].Answers.map((answer,)=> (
                    <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
                ))}
            </div>
            </>
        )
        }
        </div>
  )
}

export default Quizcomponent