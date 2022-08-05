import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Countform = () => {
    const FormhourRef = useRef(null);
    const FormminutesRef = useRef(null);
    const FormsecondsRef = useRef(null);


const[Formhour, setFormhour] = useState("");
const[Formminutes, setFormminutes] = useState("");
const[Formseconds, setFormseconds] = useState("");



const setHour = () =>
{
    for (let i=0; i<24; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormhourRef.current.appendChild(option);
        
    }
}

const setMinutes = () =>
{
    for (let i=0; i<60; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormminutesRef.current.appendChild(option);
        
    }
}

const setSecond = () =>
{
    for (let i=0; i<60; i++)
    {
        const option = document.createElement('option');
        option.value=i;
        option.text=i;
        FormsecondsRef.current.appendChild(option);
        
    }
}

const selecthour = (e) =>{
    setFormhour(e.target.value);
}

const selectseconds = (e) =>{
    setFormseconds(e.target.value);
}

const selectminutes = (e) =>{
    setFormminutes(e.target.value);
}

const navigate = useNavigate();


useEffect(() => {
    setHour();
    setMinutes();
    setSecond();
},[]);
console.log({Formseconds});
return (
    <div>
    <p>時間を入力してください</p>
    <label>
        <select ref={FormhourRef} value={Formhour} onChange={selecthour}></select>時間
    </label>
        <label>
        <select ref={FormminutesRef} value={Formminutes} onChange={selectminutes}></select>分
    </label>
        <label>
        <select ref={FormsecondsRef} value={Formseconds} onChange={selectseconds}></select>秒
    </label>
    <button onClick={() => navigate('/Rcount')}> start </button>
   </div>

    )
}
