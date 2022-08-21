import React, {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const[checks, setChecks] = useState(false);
    
    const handleDeleteTodos =(id) =>{
        axios.delete(`/todos/${id}`).then(response => {
            console.log(response)
            setTodos(todos.filter(todo => todo.id !== id))
            
        })
        
    }
    const navigate = useNavigate();
    
    console.log(checks);
    
    useEffect(() => {
        axios.get("/index").then((res) => setTodos(res.data.todos));
    }, [])
    
    return (
        <div style={{padding: "20px"}}>
            <div>Todo</div>
            {todos.map((todo) => (
                (
                <div key={todo.id}>
                <label>
                    <input
                        type="checkbox"
                        value={todo.body}
                        onChange={e => setChecks(! checks)}
                    />
                {todo.body}
                </label>
                <button onClick={() => handleDeleteTodos(todo.id)}>delete</button>
                </div>
                )
            ))}
         <button onClick={() => navigate('/create')}>add</button>
        </div>
        );
    
}

export default Todo;