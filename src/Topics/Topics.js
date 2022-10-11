import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from '../Topic/Topic';

const Topics = () => {
    const quiz = useLoaderData()
    const topics = quiz.data;
    // console.log(topics);
    const [cart,setCart]=useState([]);
    const handleaddtoquiz =(topic) =>{
        
            const newcart =[...cart,topic];
            setCart(newcart)
        
    }
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
           
            {
                topics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                handleaddtoquiz={handleaddtoquiz}
                ></Topic>)
            }
           
        </div>
    );
};

export default Topics;