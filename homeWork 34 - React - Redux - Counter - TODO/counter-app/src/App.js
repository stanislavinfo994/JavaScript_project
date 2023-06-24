import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';

const App = ({ count, increment, decrement }) => {
  return (
      <div className="counter-container">
          <div className='counter'>
            <h2>Value: {count}</h2>
            <button className="counter-button" onClick={increment}>+</button>
            <button className="counter-button" onClick={decrement}>-</button>
          </div>
      </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
