import React, { useState } from "react";

import './quiz.css'

const Quiz =()=>{
    const questions =[
        {
            questionText : 'India first satellite is named after?',
            answerOptions : [
                {answerText:'Aryabhatta' , isCorrect: true},
                {answerText:'Bhaskara II', isCorrect:false},
                {answerText:'Bhaskara I', isCorrect:false} ,
                {answerText: 'Albert Einstein', isCorrect:false}
            ],
        },
        {
            questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false }
            ],
        },
        {
            questionText: 'In which season do we need more fat?',
            answerOptions:[
                {answerText: 'Rainy season', isCorrect: false},
                {answerText: 'Spring', isCorrect: false},
                {answerText: 'Winter', isCorrect: true},
                {answerText: 'Summer', isCorrect: false},
                    
            ],

        },
        {
            questionText: 'In a normal human body, the total number of red blood cells is',
            answerOptions:[
                {answerText: '15 trillion', isCorrect: false},
                {answerText: '20 trillion', isCorrect: false},
                {answerText: '25 trillion', isCorrect: false},
                {answerText: '30 trillion', isCorrect: true},
            ],
        },
        {
            questionText: 'India participated in Olympics Hockey in?',
            answerOptions:[
                {answerText: 'NewYork', isCorrect: false},
                {answerText: 'San Francisco', isCorrect: false},
                {answerText: 'Tehran', isCorrect: false},
                {answerText: 'London', isCorrect: true},
            ],
        },
        {
            questionText: 'The first meeting of the UN General Assembly was held in which of the following cities?',
            answerOptions:[
                {answerText: '1918', isCorrect: false},
                {answerText: '1938', isCorrect: false},
                {answerText: '1948', isCorrect: false},
                {answerText: '1928', isCorrect: true},
            ],
        },
    ]
    const [currentQuestion, setCurrentQuestion]=useState(0)
     const[showScore, setShowScore] = useState(false)
    const [score, setScore]= useState(0)

      const buttonHandler =(isCorrect)=>{
        if(isCorrect){
            setScore(score + 1)
        }
    
     const nextQuestion = currentQuestion+1;
     if(nextQuestion< questions.length){
        setCurrentQuestion(nextQuestion)
     }else{
        setShowScore(true)
     }
      }
    return(
     <div className="main">
        {showScore ? (
        <div className="score-section">
            You score {score} out of {questions.length}
        </div>
        ) :(
            <>
            
        <div className="question-section">
            <div className="question-count">
            <span>Question {currentQuestion + 1}</span>{questions.length}
        </div>
        <div className="question-text">{questions[currentQuestion].questionText}</div>
        </div>
        
        <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOptions) =>(

               <button onClick={() => buttonHandler(answerOptions.isCorrect
                )}>{answerOptions.answerText}</button>

            ) )}
            
        </div>
        </>
        )}
     </div>
    );
}

export default Quiz