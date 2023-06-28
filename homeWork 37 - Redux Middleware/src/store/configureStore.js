import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import todoReducer from '../reducers/todoReducer';
import todoSaga from '../sagas/todoSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(todoSaga);
