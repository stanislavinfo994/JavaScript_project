import React from "react";
// Parts
import Button from "../form/Button";
// Helpers
import "./style.css";

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            editText: this.props.text,
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleEdit() {
        this.setState({
            isEditing: true,
        });
    }

    handleChange(event) {
        this.setState({
            editText: event.target.value,
        });
    }

    handleSave() {
        const { editText } = this.state;
        const { handleEdit, id } = this.props;
        handleEdit(id, editText);
        this.setState({
            isEditing: false,
        });
    }

    handleCancel() {
        this.setState({
            isEditing: false,
            editText: this.props.text,
        });
    }

    handleRemove() {
        const { handleRemove, id } = this.props;
        handleRemove(id);
    }

    render() {
        const { text } = this.props;
        const { isEditing, editText } = this.state;

        if (isEditing) {
            return (
                <div className="todo-item">
                    <input
                        type="text"
                        value={editText}
                        onChange={this.handleChange}
                    />
                    <Button
                        text="Зберегти"
                        onClick={this.handleSave}
                        customClass="todo-item__edit-save"
                    />
                    <Button
                        text="Скасувати"
                        onClick={this.handleCancel}
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
                    onClick={this.handleEdit}
                    customClass="todo-item__edit"
                />
                <Button
                    text="Видалити"
                    onClick={() => this.handleRemove()}
                    customClass="todo-item__delete"
                />
            </div>
        );
    }
}
