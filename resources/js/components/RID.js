import React, {useState} from 'react';
import Pic from "./Pic";
import Piccat from "./Piccat";

export default function Rid() {
    const[changeDisplay, setChangeDisplay] = useState(true);
      return ( 
        <div style={{ textAlign: "center"}}>
        <button onClick ={e => setChangeDisplay(!changeDisplay)}>reversal</button>
        {changeDisplay ? ( <Piccat />):(<Pic />)}
        </div>
        );
}