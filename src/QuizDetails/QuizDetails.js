import React from 'react';

const QuizDetails = ({ques}) => {
    console.log(ques);
    const { question, correctAnswer, options} = ques;
    return (
        <div className='mb-12'>
            
            <div className='text-amber-600 text-2xl mb-4'>
            <h2>{question.slice(3,100)}</h2>
            </div>
           
            <div className='text-gray-900 text-xl grid grid-cols-2 gap-4'>
            <h1  className=' border border-cyan-600'> <input type="checkbox" name="" id="" />   {options[0]}</h1>
            <h1  className=' border border-cyan-600'> <input type="checkbox" name="" id="" /> {options[1]}</h1>
            <h1  className=' border border-cyan-600'> <input type="checkbox" name="" id="" /> {options[2]}</h1>
            <h1  className=' border border-cyan-600'>  <input type="checkbox" name="" id="" />  {options[3]}</h1>
            </div>
            
        </div>
    );
};

export default QuizDetails;