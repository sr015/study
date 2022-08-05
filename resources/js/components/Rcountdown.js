import React , {useState} from "react";
import { useTimer } from "react-timer-hook";
import Mytimer from "./Mytimer";
import Test from "./Test";

export default function Rcountdown(){
      const time = new Date();
      const [countdownTime, setCountdownTime] = useState(100);
      const [chengeDisplay, setChengeDisplay] = useState(true);
  time.setSeconds(time.getSeconds() + countdownTime); 
  console.log(countdownTime);
  return (
    <div> 
    <button onClick={e =>setChengeDisplay(!chengeDisplay)}>chenge</button>
      {chengeDisplay ? ( <Mytimer expiryTimestamp={time} />): (<Test countdownTime={countdownTime} setCountdownTime={setCountdownTime}/>)} 
    </div>
  );
}