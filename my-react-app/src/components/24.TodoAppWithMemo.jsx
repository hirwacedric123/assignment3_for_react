import React, { useState, memo } from "react";

const TodoList = memo(({ todos }) => {
    console.log("TodoList rendered");
    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
        </ul>
    );
});

function TodoAppWithMemo() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = () => {
        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <div className="component-card">
            <h2>24. Todo List</h2>
            <form action="">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo" 
                style={{ padding: '10px', borderRadius: '5px' }}
                required
            />
            <button style={{ padding: '10px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px' }} onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} />

            </form>
            
        </div>
    );
}

export default TodoAppWithMemo;
