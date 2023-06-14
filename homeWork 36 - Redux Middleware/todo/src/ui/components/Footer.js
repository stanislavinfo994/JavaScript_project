// Core
import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
// Parts
import Button from "./form/Button";
// Engine
import {todosSelectors, todosActions} from "../../engine/core/todos/slice";


export function Footer() {
    const length = useSelector(todosSelectors.length);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchItems = JSON.parse(localStorage.getItem('items')) || [];
        dispatch(todosActions.addItems(fetchItems));
    }, []);

    const clearValue = () => {
        dispatch(todosActions.addItems([]));
        localStorage.setItem('items', JSON.stringify([]));
    }

    return (
        <footer>
            У вас {length} записів
            <Button onClick={clearValue} text="Clear" />
        </footer>
    );
}
