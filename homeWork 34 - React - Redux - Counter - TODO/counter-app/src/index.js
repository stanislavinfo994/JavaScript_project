import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import App from './App';
import counterReducer from './reducers';
import './App.css';

const store = configureStore({
    reducer: counterReducer,
    middleware: [thunk],
});

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);
