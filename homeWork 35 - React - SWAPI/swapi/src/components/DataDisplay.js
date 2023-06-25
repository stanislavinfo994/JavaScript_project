import React from 'react';
import { useSelector } from 'react-redux';

const DataDisplay = () => {
    const { data, endpoint, error } = useSelector((state) => state);

    if (error) {
        return <h2>404 error: {error}</h2>;
    }

    return (
        <div className="container">
            <h2>Result: {endpoint}</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default DataDisplay;
