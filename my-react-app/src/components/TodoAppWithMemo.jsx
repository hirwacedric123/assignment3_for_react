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
            <h1>24. Todo List</h1>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo"
                required
                style={{
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #fefefe',
                    backgroundColor: '#2c3e50',
                    color: '#ecf0f1'
                }}
            />
            <button onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} />
        </div>
    );
}

export default TodoAppWithMemo;
