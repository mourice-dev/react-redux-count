import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { decrement, increment } from './Counting';


export default function App() {
  const count = useSelector((state) => state.counting.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

