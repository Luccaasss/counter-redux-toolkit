import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const [incrementAmount, setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className='counter-display'>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <input type='number' placeholder='0' onChange={event => setIncrementAmount(event.target.value)}></input>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Increment</button>
      </div>
    </div>
  )
}