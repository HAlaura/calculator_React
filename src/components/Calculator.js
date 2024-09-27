import React, { useState } from 'react'
import './Calculator.css'




const Calculator =() =>{
const [inputvalue, setInputValue]=useState(0);
const [result, setResulet]=useState(0);
//function
const handleInputChange= (e) => {
    setInputValue(Number(e.target.value));
}
const plus = (e) =>{
    e.preventDefault();
    setResulet((prevResult) => prevResult+inputvalue);
};
const minius =  (e) =>{
    e.preventDefault();
    setResulet((prevResult) => prevResult-inputvalue);
};
const times  = (e) =>{
    e.preventDefault();
    setResulet((prevResult) => prevResult*inputvalue);
};
const devided = (e) =>{
    e.preventDefault();
    setResulet((prevResult) => prevResult/inputvalue);
};


const resetInput = (e) =>{
e.preventDefault();
setInputValue(0);
}

const resetResult = (e) =>{
    e.preventDefault();
    setResulet(0);
}

    return(
        <div>
            <h2>Bulid a Calculator using React</h2>
            <from>
                <p>{result}</p>
                <input
                type='number'
                placeholder='Type a number'
                value={inputvalue}
                onChange={handleInputChange}
                />
                <br/>
                <button onClick={plus}>Add</button>
                <button onClick={minius}>minius</button>
                <button onClick={times}>times</button>
                <button onClick={devided}>devided</button>
                <button onClick={resetInput}className='btn1'>resetInput</button>
                <button onClick={resetResult}className='btn1'>resetResult</button>
            </from>   
        </div>


    );
};
export default Calculator;