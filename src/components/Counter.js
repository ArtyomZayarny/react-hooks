import React, { useState, useReducer } from 'react';

const ADD = 'add';
const CHANGE = 'change';

const reducer = (state, action) => {
  /* {
    type:'increment',
    paylod: data
  }
  */
  switch (action.type) {
    case ADD:
      return { ...state, finalVal: action.payload };
    case CHANGE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    value: '',
    finalVal: '',
  });

  const addText = () => {
    dispatch({ type: 'add', payload: state.value });
  };

  const handleChange = (e) => {
    dispatch({ type: 'change', payload: e.target.value });
  };
  return (
    <>
      <input value={state.value} onChange={handleChange} />
      <button onClick={addText}>Add text</button>
      <p>{state.value}</p>
      <p>{state.finalVal}</p>
    </>
  );
};
