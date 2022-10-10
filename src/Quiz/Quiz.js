import React from 'react';
import { useLoaderData } from 'react-router-dom';



const Quiz = () => {
    const quizes=useLoaderData();
    console.log(quizes);
    
    const {questions} = quizes.data;
    console.log(questions);
    
    return (
        <div>
             
        </div>
    );
};

export default Quiz;