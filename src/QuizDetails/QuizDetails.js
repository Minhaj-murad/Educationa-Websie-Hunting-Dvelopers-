import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QuizDetails = ({ques}) => {
    
    console.log(ques);
    const { question, correctAnswer, options} = ques;
    
       const handlecheckanswer1 = (options)=> {
        if (correctAnswer === options[0]){
            toast('RIGHT answer');
          }
          else {
            toast('sry better luck next time');
          }
       }
     
       const handlecheckanswer2 = (options)=> {
        if (correctAnswer === options[1]){
            toast('Right answer');
          }
          else {
            toast('sry better luck next time');
          }
       }
     
       const handlecheckanswer3 = (options)=> {
        if (correctAnswer === options[2]){
            toast('Right answer');
          }
          else {
            toast('sry better luck next time');
          }
       }
     
       const handlecheckanswer4 = (options)=> {
        if (correctAnswer === options[3]){
            toast('Right answer');
          }
          else {
            toast('sry better luck next time');
          }
       }
     
     
    
    return (
        <div className='mb-12 borderflex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-xl lg:flex-row sm:mx-auto'>
            
            <div className='text-amber-600 text-2xl mb-4 '>
            <h2>{question.slice(3,1000)}</h2>
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