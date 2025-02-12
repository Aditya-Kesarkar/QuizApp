import React, { useState } from 'react';
import { data } from './data';
import './style3.css';

export default function Quiz() {
    let [option, setOption] = useState('');
    let [index, setIndex] = useState(0);
    let [finish, setFinish] = useState(false);
    let [score, setScore] = useState(0);
    
    // This array contains the correct options of the Q's in data.js in same order
    const correctOption = ['option1', 'option2', "option1", "option2", "option3", "option4", 
        'option1', 'option2', "option1", "option2", "option3", "option4", 'option1', 'option2', "option1", "option2", "option3", "option4", 
        'option1', 'option2', "option1", "option2", "option3", "option4", 'option1', 'option2', "option1", "option2", "option3", "option4",
        'option1', 'option2', "option1", "option2", "option3", "option4"];

    const handleNext = () => {
        if (index < data.length-1) {
            if (correctOption[index] === option) {
                setScore(score+1);
            }
            setIndex(prev => prev+1); 
            setOption('');
        }
        else {
            setFinish(true);
        }
    }

    if(finish) {
        return (
            <div className='scorePage'>
                <h1>Quiz Completed 🎉</h1>
                <h3>Your Score is: {score} of {data.length}</h3>
            </div>
        )
    }
    
    const handleSelect = (optn) => {
        setOption(optn);
    }

return (
        <>
        <div className='quiz'>
            <h1>🚀 React-Redux Quiz App</h1>
            <h3>{data[index].Question}</h3>
            <ul>
                <li className={option === 'option1' ? 'selected': ''} 
                    onClick={() => {handleSelect('option1')}}>{data[index].Option1}</li>

                <li className={option === 'option2' ? 'selected': ''} 
                    onClick={() => {handleSelect('option2')}}>{data[index].Option2}</li>

                <li className={option === 'option3' ? 'selected': ''} 
                    onClick={() => {handleSelect('option3')}}>{data[index].Option3}</li>

                <li className={option === 'option4' ? 'selected': ''} 
                    onClick={() => {handleSelect('option4')}}>{data[index].Option4}</li>
            </ul>
            <button onClick={handleNext} disabled = {!option}>Next</button>
            <h5>Question {index+1} of {data.length}</h5>
        </div>
        </>
    )
}

