import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faEye } from '@fortawesome/free-solid-svg-icons'

  const element = <FontAwesomeIcon icon={faEye} />
const QuizDetails = ({ques}) => {
    
    console.log(ques);
    const { question, correctAnswer, options} = ques;
    
       const handlecheckanswer1 = (options)=> {
        if (correctAnswer === options[0]){
            toast.success('RIGHT answer',{ autoClose: 500 });
          }
          else {
            toast.warning('Wrong answer! better luck next time',{ autoClose: 500 });
          }
       }
     
       const handlecheckanswer2 = (options)=> {
        if (correctAnswer === options[1]){
            toast.success('Right answer',{ autoClose: 500 });
          }
          else {
            toast.warning('Wrong answer! better luck next time',{ autoClose: 500 });
          }
       }
     
       const handlecheckanswer3 = (options)=> {
        if (correctAnswer === options[2]){
            toast.success('Right answer',{ autoClose: 500 });
          }
          else {
            toast.warning('Wrong answer! better luck next time',{ autoClose: 500 });
          }
       }
     
       const handlecheckanswer4 = (options)=> {
        if (correctAnswer === options[3]){
            toast.success('Right answer',{ autoClose: 500 });
          }
          else {
            toast.warning('Wrong answer! better luck next time',{ autoClose: 500 });
          }
       }
       
     
     const correctAns =()=>{
        toast.info(`Correct Answer is: ${correctAnswer}`,{ autoClose: 500 })
     }
    
    return (
        <div className='mb-12 borderflex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-xl lg:flex-row sm:mx-auto'>
            
            <div className='text-amber-600 text-2xl mb-4 flex justify-between'>
            <h2>{question.slice(3,1000)}</h2> 
            <span onClick={()=>correctAns()}> {element}</span>
            </div>
            
            <div className='text-gray-900 text-xl grid grid-cols-2 gap-4'>
            <h1 className='relative overflow-hidden transition duration-200 transform rounded shadow-2xl hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer'> <input onClick={()=>handlecheckanswer1(options)} type="radio" name="" id="" />   {options[0]}</h1>
            <h1 className='relative overflow-hidden transition duration-200 transform rounded shadow-2xl hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer'> <input onClick={()=>handlecheckanswer2(options)} type="radio" name="" id="" /> {options[1]}</h1>
            <h1 className='relative overflow-hidden transition duration-200 transform rounded shadow-2xl hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer'> <input onClick={()=>handlecheckanswer3(options)} type="radio" name="" id="" /> {options[2]}</h1>
            <h1 className='relative overflow-hidden transition duration-200 transform rounded shadow-2xl hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer'>  <input onClick={()=>handlecheckanswer4(options)} type="radio" name="" id="" />  {options[3]}</h1>
            </div>
            <ToastContainer />
        </div>
        
    );
      };

export default QuizDetails;