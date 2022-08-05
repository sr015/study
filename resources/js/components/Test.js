import React from 'react';
import ReactDOM from 'react-dom';

const Test = (props) =>  {
    const{
        countdownTime,
        setCountdownTime
    }=props;
    console.log(countdownTime)
    return (
    <div>
     <button onClick={e =>setCountdownTime(200)}>ttt</button>
    </div>)
}

export default Test;

