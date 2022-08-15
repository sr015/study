import React, {useState, useEffect} from "react";
import axios from "axios";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const[checks, setChecks] = useState(false);
    console.log(checks);
    useEffect(() => {
        axios.get("/index").then((res) => setTodos(res.data.todos));
    }, [])
    
    return (
        <div style={{padding: "20px"}}>
            <div>Todo</div>
            <button onClick= {e => setChecks(! checks)}>chenge</button>
            {todos.map((todo) => (
                (
                <div key={todo.id}>
                    <p>{todo.body}</p>
                </div>
                )
            ))}
        
        </div>
        );
    
}

export default Todo;