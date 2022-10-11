import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Options/Option';

  const element = <FontAwesomeIcon icon={faEye} />
const QuizDetails = ({ques}) => {
    
    
    const { question, correctAnswer, options} = ques;
    
       
     
     const correctAns =()=>{
        toast.info(`Correct Answer is: ${correctAnswer}`,{ autoClose: 700 })
     }
    
    return (
        <div className='mb-12 borderflex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-xl lg:flex-row sm:mx-auto'>
            
            <div className='text-amber-600 text-2xl mb-4 flex justify-between'>
            <h2>{question.slice(3,1000)}</h2> 
            <span className='hover:text-gray-800 cursor-pointer' onClick={()=>correctAns()}> {element}</span>
            </div>
            
            <div className='text-gray-900 text-xl grid grid-cols-2 gap-4'>
            {
                options.map(option => <Option option={option} correctAnswer={correctAnswer}></Option>)
            }
            </div>
            <ToastContainer />
        </div>
        
    );
      };

export default QuizDetails;