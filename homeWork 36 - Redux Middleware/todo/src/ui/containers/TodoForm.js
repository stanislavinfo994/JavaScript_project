// import React, { useState } from "react";
import '../../main.css';
// Parts
import Input from "../components/form/Input";
import Button from "../components/form/Button";
import {todosActions, todosSelectors} from "../../engine/core/todos/slice";
import { handleAddTodo } from "../../engine/core/todos/thunks";
import {useDispatch, useSelector} from "react-redux";
import {store} from "../../engine/init/store";

const dispatchAndLog = (action, dispatch) => {
    console.log('action', action);
    console.log('before state', store.getState());
    dispatch(action);
    console.log('after state', store.getState());
}



function TodoForm() {
    const dispatch = useDispatch();

    const handleAdd = event => {
        event.preventDefault();
        const input = event.target.getElementsByClassName('form__input')[0];
        const text = input.value;
        dispatch(handleAddTodo(text));
        input.value = '';
    };

    return (
        <form className="form" onSubmit={handleAdd}>
            <Input />
            <Button text="Отправить" />
        </form>
    );
}

export default TodoForm;
