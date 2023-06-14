import { createSlice } from "@reduxjs/toolkit";
// immutable


const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items = action.payload;
        },
        removeItem: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
        }
    }
});

export const todosSelectors = {
    items: state => state.todos.items,
    length: state => state.todos.items.length,
};

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
