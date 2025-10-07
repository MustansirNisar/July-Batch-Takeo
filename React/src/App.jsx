import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from './ReduxToolkit/CounterSlice'

function App() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default App












