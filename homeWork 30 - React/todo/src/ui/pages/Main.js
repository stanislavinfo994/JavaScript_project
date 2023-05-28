import React, { useState, useEffect } from "react";
import '../../main.css';
// Parts
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";
import TodoForm from "../containers/TodoForm";

const Main = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('items')) || [];
        setItems(storedItems);
    }, []);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    const handleAdd = (event) => {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        const newItems = [
            ...items,
            { id: Math.random(), text, isCompleted: false }
        ];
        setItems(newItems);
        input.value = '';
    }

    const handleRemove = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    }

    const handleEdit = (id, newText) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, text: newText };
            }
            return item;
        });
        setItems(updatedItems);
    }

    const handleToggleComplete = (id) => {
        const updatedItems = items.map(item => {
            if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });
        setItems(updatedItems);
    }

    return (
        <div className="container">
            <Header />
            <TodoForm handleAdd={handleAdd} />
            <div>
                {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                        handleToggleComplete={handleToggleComplete}
                        isCompleted={item.isCompleted}
                    />
                ))}
            </div>
        </div>
    );
}

export default Main;
