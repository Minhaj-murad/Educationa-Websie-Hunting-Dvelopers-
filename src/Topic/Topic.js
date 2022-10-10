import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faArrowRight } from '@fortawesome/free-solid-svg-icons'

  const element = <FontAwesomeIcon icon={faArrowRight} />
const Topic = ({topic,handleaddtoquiz}) => {
    // console.log(topic);
    const{name, logo, total,id} = topic;
    
    return (
        
             <div >
            <div className='flex w-96 m-auto my-4 border border-gray-700 rounded-xl'>
            
            <div className='w-48 h-60 rounded-xl'>
            <img className='w-48 h-48 rounded-xl ' src={logo} alt="" />
            <h1 className='font-bold text-xl mt-2'>{name}</h1>
            </div>
             <div className='p-auto m-auto '>
             
             
             <h3 className='font-semibold text-md'>Total Quiz:{total}</h3>
             <Link to={`../topic/${id}`}>
             <button onClick={()=>handleaddtoquiz(topic)} className='bg-blue-900 text-white p-2 rounded-xl '>Start Quiz <span className='ml-2'>{element}</span> </button>
             </Link>

             </div>
             
         </div>
        </div>
        
    );
};

export default Topic;