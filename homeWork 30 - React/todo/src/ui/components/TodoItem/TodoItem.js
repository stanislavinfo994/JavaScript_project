import React, { useState } from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

const TodoItem = ({ text, handleRemove, handleEdit, handleToggleComplete, id, isCompleted }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleChange = (event) => {
        setEditText(event.target.value);
    }

    const handleSave = () => {
        handleEdit(id, editText);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setEditText(text);
        setIsEditing(false);
    }

    const handleRemoveClick = () => {
        handleRemove(id);
    }

    const handleToggleCompleteClick = () => {
        handleToggleComplete(id);
    }

    if (isEditing) {
        return (
            <div className="todo-item">
                <input
                    type="text"
                    value={editText}
                    onChange={handleChange}
                />
                <Button
                    text="Зберегти"
                    onClick={handleSave}
                    customClass="todo-item__edit-save"
                />
                <Button
                    text="Скасувати"
                    onClick={handleCancel}
                    customClass="todo-item__edit-cancel"
                />
            </div>
        );
    }

    return (
        <div className={`todo-item ${isCompleted ? "todo-item--completed" : ""}`}>
            <div className="todo-item__description">{text}</div>
            <Button
                text="Редагувати"
                onClick={handleEditClick}
                customClass="todo-item__edit"
            />
            <Button
                text="Видалити"
                onClick={handleRemoveClick}
                customClass="todo-item__delete"
            />
            <Button
                text={isCompleted ? "Відмітити як не виконане" : "Відмітити як виконане"}
                onClick={handleToggleCompleteClick}
                customClass="todo-item__toggle-complete"
            />
        </div>
    );
}

export default TodoItem;
