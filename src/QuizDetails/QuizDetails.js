import React from 'react';

const QuizDetails = ({ques}) => {
    console.log(ques);
    const { question, correctAnswer} = ques;
    return (
        <div>
            <h2>{question}</h2>
            <h3>{correctAnswer}</h3>
        </div>
    );
};

export default QuizDetails;