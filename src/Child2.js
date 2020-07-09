import React, { useReducer } from 'react';
import reducer from './CounterReducer'

const Child2 = () =>{
    let [state, dispatch] = useReducer (reducer, 1);
    return (
        <div>
            <h2>2nd Child Using Reducer </h2>
            <h3>Value of Reducer Counter : {state}</h3>
            <button onClick = {() => dispatch ('INCREMENT')}>Reducer Button</button>
        </div>
    );
}
export default Child2