import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheckCircle, FaCircle } from "react-icons/fa";
import styles from './TodoItem.module.css';

const TodoItem = ({ text, handleRemove, handleEdit, handleToggleComplete, id, isCompleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (event) => {
        setEditText(event.target.value);
    };

    const handleSave = () => {
        handleEdit(id, editText);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditText(text);
        setIsEditing(false);
    };

    const handleRemoveClick = () => {
        handleRemove(id);
    };

    const handleToggleCompleteClick = () => {
        handleToggleComplete(id);
    };

    if (isEditing) {
        return (
            <div className={styles.todoItem}>
                <input type="text" value={editText} onChange={handleChange} className={styles.editInput} />
                <FaCheckCircle
                    onClick={handleSave}
                    className={`${styles.icon} ${styles.editSaveIcon}`}
                />
                <FaCircle
                    onClick={handleCancel}
                    className={`${styles.icon} ${styles.editCancelIcon}`}
                />
            </div>
        );
    }

    return (
        <div className={`${styles.todoItem} ${isCompleted ? styles.completed : ""}`}>
            <div className={styles.description}>{text}</div>
            <FaEdit
                onClick={handleEditClick}
                className={`${styles.icon} ${styles.editIcon}`}
            />
            <FaTrash
                onClick={handleRemoveClick}
                className={`${styles.icon} ${styles.deleteIcon}`}
            />
            {isCompleted ? (
                <FaCircle
                    onClick={handleToggleCompleteClick}
                    className={`${styles.icon} ${styles.toggleCompleteIcon}`}
                />
            ) : (
                <FaCheckCircle
                    onClick={handleToggleCompleteClick}
                    className={`${styles.icon} ${styles.toggleCompleteIcon}`}
                />
            )}
        </div>
    );
};

export default TodoItem;
