import React, { useEffect } from 'react'

function Effect({count, data}) {
 useEffect(()=>{
    console.log("Mounting") //Execute in the begining
 },[])

  useEffect(()=>{
    console.log("Updating") //Execute on update
 },[count])
    
 useEffect(()=>{
    return ()=>{
        console.log("Unmounting") //Execute on removal of the component
    }
 })
  return (
    <div>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  )
}

export default Effect
