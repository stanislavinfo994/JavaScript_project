import React, { useState } from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

const TodoItem = ({ text, handleRemove, handleEdit, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(text);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setEditText(event.target.value);
    };

    const handleSaveClick = () => {
        handleEdit(id, editText);
        setIsEditing(false);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditText(text);
    };

    const handleRemoveClick = () => {
        handleRemove(id);
    };

    if (isEditing) {
        return (
            <div className="todo-item">
                <input
                    type="text"
                    value={editText}
                    onChange={handleInputChange}
                />
                <Button
                    text="Зберегти"
                    onClick={handleSaveClick}
                    customClass="todo-item__edit-save"
                />
                <Button
                    text="Скасувати"
                    onClick={handleCancelClick}
                    customClass="todo-item__edit-cancel"
                />
            </div>
        );
    }

    return (
        <div className="todo-item">
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
        </div>
    );
};

export default TodoItem;
