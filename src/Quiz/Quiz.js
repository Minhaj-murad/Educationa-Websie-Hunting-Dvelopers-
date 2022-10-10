import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';



const Quiz = () => {
    const quizes=useLoaderData();
    console.log(quizes);
    const {questions} =quizes.data;
    console.log(quizes.data);
    
    
    
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
          <div>
            {
                questions.map(ques => <QuizDetails
                key={ques.id}
                 ques={ques}
                ></QuizDetails>)
            }
            
          </div>
        </div>
      )
    }

export default Quiz;