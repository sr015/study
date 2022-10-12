import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Create =() => {
    const [body, setBody] = useState("");
    const [check, setCheck]= useState(false);
    const navigate= useNavigate();
    
    const handleSendTodos = (e) =>{
        e.preventDefault();
        const data={
            body: body,
            check: check
        }
        axios.post("/store", data).then(res => {
            console.log(res.data.message)
            navigate("/todos");
        });
    }
    
    return (
        <div style={{padding:"20px"}}>
         <form onSubmit={handleSendTodos} >
            <h2>Create</h2>
            <p>body</p>
            <input onChange={e => setBody(e.target.value)} />
            <button>send</button>
         </form>
        </div>
        )
}
export default Create;