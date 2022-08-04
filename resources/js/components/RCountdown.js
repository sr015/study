import React from 'react'
import Countdown from 'react-countdown'

const RCountdown = () =>{
    return (
        <div>
            <Countdown date={Date.now() + 1000} />
        </div>
        );
};

export default RCountdown;