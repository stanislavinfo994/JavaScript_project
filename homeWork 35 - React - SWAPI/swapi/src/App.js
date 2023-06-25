import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData, clearData } from './actions/actions';
import Button from './components/Button';
import DataDisplay from './components/DataDisplay';
import './App.css';

const App = () => {
    const [endpoint, setEndpoint] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchData(endpoint));
    };

    const handleClear = () => {
        dispatch(clearData());
    };

    return (
        <div className="container">
            <h1>Star Wars API Interface</h1>
            <form onSubmit={handleSubmit}>
                <p>Try it now!</p>
                <div className="input-group">
                    <span>https://swapi.dev/api/
                    <input
                        type="text"
                        value={endpoint}
                        onChange={(e) => setEndpoint(e.target.value)}
                        placeholder="Enter endpoint"
                    />
                        <Button type="submit">Get info</Button>
                    </span>
                </div>
                <small>
                    Need a hint? try{' '}
                    <a href="#" onClick={() => setEndpoint('people/1/')}>
                        <i>people/1/</i>
                    </a>{' '}
                    or{' '}
                    <a href="#" onClick={() => setEndpoint('planets/3/')}>
                        <i>planets/3/</i>
                    </a>{' '}
                    or{' '}
                    <a href="#" onClick={() => setEndpoint('starships/9/')}>
                        <i>starships/9/</i>
                    </a>
                </small>
            </form>
            <Button onClick={handleClear}>Clear Data</Button>
            <DataDisplay />
        </div>
    );
};

export default App;
