import React from 'react'
import { useState } from 'react'
function Counter() {
let[count, setCount] = useState(0)
let[reverse, setReverse] = useState(200)
let update = ()=>{
  setCount(count+1)
}

  return (
    <div>
      <h1>UpCount: {count}</h1>
      <button onClick={update}>UpCount</button>
      <br /><br />
       <h1>DownCount: {reverse}</h1>
      <button onClick={()=>setReverse(reverse-1)}>DownCount</button>
    </div>
  )
}

export default Counter
