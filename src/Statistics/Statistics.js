import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Statistics = () => {
   const datas = useLoaderData();
   const datavai =datas.data;
   console.log('datavai',datavai);
    return (
        <div className='w-96 mx-auto'>
            <h2 className="text-2xl font-extrabold leading-none sm:text-4xl xl:text-3xl">LineChart of Question Number</h2>
            <LineChart width={380} height={500} data={datavai}>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
  }



export default Statistics;