import React, { useState, useEffect } from "react";
import { Form, Field } from "react-final-form";
import styles from './TodoList.module.css';
import Header from "../components/Header";
import TodoItem from "../components/TodoItem/TodoItem";

const TodoList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("items")) || [];
        setItems(storedItems);
    }, []);

    const handleAdd = (values) => {
        const { text } = values;
        const newItems = [
            ...items,
            { id: Math.random(), text }
        ];
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };

    const handleRemove = (id) => {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
        localStorage.setItem("items", JSON.stringify(newItems));
    };

    const handleEdit = (id, newText) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, text: newText };
            }
            return item;
        });
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };

    const handleToggleComplete = (id) => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });
        setItems(updatedItems);
        localStorage.setItem("items", JSON.stringify(updatedItems));
    };

    const validate = (values) => {
        const errors = {};
        if (!values.text || values.text.length < 5) {
            errors.text = "Поле повинно містити щонайменше 5 символів";
        }
        return errors;
    };

    return (
        <div className={styles.container}>
            <Header />
            <Form
                onSubmit={handleAdd}
                validate={validate}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <Field name="text">
                            {({ input, meta }) => (
                                <div className={styles.formGroup}>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder="Додай завдання"
                                        className={styles.input}
                                    />
                                    {meta.error && meta.touched && (
                                        <span className={styles.error}>{meta.error}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                        <button
                            type="submit"
                            disabled={submitting || pristine}
                            className={styles.button}
                        >
                            Додати
                        </button>
                    </form>
                )}
            />
            <div>
                {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        text={item.text}
                        id={item.id}
                        isCompleted={item.isCompleted}
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                        handleToggleComplete={handleToggleComplete}
                    />
                ))}
            </div>
        </div>
    );
};

export default TodoList;
