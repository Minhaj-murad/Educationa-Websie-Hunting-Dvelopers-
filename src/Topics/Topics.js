import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const quiz = useLoaderData()
    const topics = quiz.data;
    console.log(topics);
    return (
        <div>
            <h2>This is topic page </h2>
            {
                topics.map(topic => <Topic
                key={topic.id}
                topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;