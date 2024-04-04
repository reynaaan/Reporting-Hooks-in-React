import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Counter</h2>
      <div style={{ fontSize: '2rem' }}>Count: {state.count}</div>
      <div>
        <button style={{ fontSize: '1.5rem', marginRight: '1rem' }} onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button style={{ fontSize: '1.5rem' }} onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
