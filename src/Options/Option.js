import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,correctAnswer}) => {
    console.log(option);

    const handlecheckanswer =(option)=>{
        if (option === correctAnswer){
    toast.success('The answer Is Correct',{ autoClose: 700 });
        }
        else{
            toast.warning('Wrong Answer',{ autoClose: 700 })
        }
    }
    return (
        <div>
             <h1 className='relative overflow-hidden transition duration-200 transform rounded shadow-2xl hover:-translate-y-2 hover:shadow-4xl hover:cursor-pointer'> <input onClick={()=>handlecheckanswer(option)} type="radio" name="" id="" />   {option}</h1>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;