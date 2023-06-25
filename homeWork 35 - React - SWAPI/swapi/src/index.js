import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
});

const ErrorBoundary = ({ children }) => {
    const [hasError, setHasError] = React.useState(false);

    React.useEffect(() => {
        const errorHandler = () => {
            setHasError(true);
        };
        window.addEventListener('error', errorHandler);
        return () => {
            window.removeEventListener('error', errorHandler);
        };
    }, []);

    if (hasError) {
        return <p>Something went wrong</p>;
    }

    return children;
};

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

