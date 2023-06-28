import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo, toggleTodo } from '../actions/todoActions';

const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeTodo(todo.id));
    };

    const handleEdit = () => {
        const newText = prompt('Enter the new text:', todo.text);
        if (newText && newText.trim()) {
            dispatch(editTodo(todo.id, newText));
        }
    };

    const handleToggle = () => {
        dispatch(toggleTodo(todo.id));
    };

    return (
        <li>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={handleToggle}>{todo.completed ? 'Undo' : 'Done'}</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleRemove}>Remove</button>
        </li>
    );
};

export default TodoItem;
