import React from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
    const todos = useSelector((state) => state.todos);

    return (
        <div className="container">
            <h1>TODO App</h1>
            <TodoForm />
            <h2>TODOS</h2>
            <ul>
                {todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} />
                ))}
            </ul>
            <footer>
                <p>Total Todos: {todos.length}</p>
            </footer>
        </div>
    );
};

export default App;
