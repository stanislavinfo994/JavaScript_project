import { put, takeEvery, call } from 'redux-saga/effects';
import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO } from '../actions/todoActions';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

function* addTodoSaga(action) {
    try {
        const response = yield call(axios.post, API_URL, { text: action.payload.text });
        const newTodo = response.data;
        yield put({ type: ADD_TODO, payload: newTodo });
    } catch (error) {
        console.log('Error adding todo:', error);
    }
}

function* removeTodoSaga(action) {
    const todoId = action.payload.id;
    try {
        yield call(axios.delete, `${API_URL}/${todoId}`);
        yield put({ type: REMOVE_TODO, payload: { id: todoId } });
    } catch (error) {
        console.log('Error removing todo:', error);
    }
}

function* editTodoSaga(action) {
    const { id, text } = action.payload;
    try {
        yield call(axios.put, `${API_URL}/${id}`, { text });
        yield put({ type: EDIT_TODO, payload: { id, text } });
    } catch (error) {
        console.log('Error editing todo:', error);
    }
}

function* toggleTodoSaga(action) {
    const { id, completed } = action.payload;
    try {
        yield call(axios.put, `${API_URL}/${id}`, { completed });
        yield put({ type: TOGGLE_TODO, payload: { id, completed } });
    } catch (error) {
        console.log('Error toggling todo:', error);
    }
}

export default function* todoSaga() {
    yield takeEvery(ADD_TODO, addTodoSaga);
    yield takeEvery(REMOVE_TODO, removeTodoSaga);
    yield takeEvery(EDIT_TODO, editTodoSaga);
    yield takeEvery(TOGGLE_TODO, toggleTodoSaga);
}
