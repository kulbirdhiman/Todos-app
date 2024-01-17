// src/App.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo, selectTodos } from '../store/todoSlice';
import './todo.css'
function Todos() {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();
    const todos = useSelector(selectTodos);

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };
    console.log(todos)
    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <section className='main'>
            <div className='todo-list' >
                <h1>Todo App</h1>
                <div>
                    <input type="text" placeholder='enter your todo' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                    <button onClick={handleAddTodo}>Add Todo</button>
                </div>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span
                                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                onClick={() => handleToggleTodo(todo.id)}
                            >
                                {todo.text}
                            </span>
                            <button id='remove' onClick={() => handleRemoveTodo(todo.id)}>X</button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Todos;
