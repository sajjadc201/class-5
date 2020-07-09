import React,  { useContext } from 'react';
import {realContext} from './MyContext';

const Child = () => {
    let counterValue = useContext(realContext)
    console.log(counterValue)
    return (
    <div>
        <h2>1st Child Using Context</h2>
        <h3>Value of Context Counter : {counterValue[0]}</h3>

        <button onClick = {()=> {counterValue[1] (++counterValue[0])}
        }>Context Button</button>
    </div>

    )
}

export default Child;