import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/todoActions';

const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { id: Date.now(), text: action.payload.text, completed: false }];
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        case EDIT_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            );
        case TOGGLE_TODO:
            return state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
        default:
            return state;
    }
};

export default todoReducer;
