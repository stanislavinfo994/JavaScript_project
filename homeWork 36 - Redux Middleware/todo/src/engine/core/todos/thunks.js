import { todosActions } from "./slice";

export const handleAddTodo = (text) => {
    return (dispatch, getState) => {
        const items = getState().todos.items;
        const newItems = [...items, { id: Math.random(), text }];
        const cancelFunction = dispatch(todosActions.addItems(newItems, { delayMS: 1000 }));
        localStorage.setItem("items", JSON.stringify(newItems));
        return cancelFunction;
    };
};
