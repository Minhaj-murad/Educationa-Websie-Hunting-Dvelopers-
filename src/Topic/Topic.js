import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic,handleaddtoquiz}) => {
    // console.log(topic);
    const{name, logo, total,id} = topic;
    return (
        <Link to={`../topic/${id}`}>
             <div >
            <div className='flex w-96 m-auto gap-6 my-4 border border-gray-700 rounded-xl'>
            
            <div className='w-48 h-36 rounded-xl'>
            <img className='w-48 h-36 rounded-xl ' src={logo} alt="" />
            </div>
             <div className='p-auto m-auto'>
             <h1 className='font-bold text-lg'>{name}</h1>
             
             <h3 className='font-semibold text-md'>Total Quiz:{total}</h3>
               <button onClick={()=>handleaddtoquiz(topic)} className='bg-blue-900 text-white p-2 rounded-xl'>Start Quiz</button>
             </div>
             
         </div>
        </div>
        </Link>
    );
};

export default Topic;