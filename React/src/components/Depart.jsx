import React from 'react'
import Student from './Student'

function Depart() {
  return (
    <div style={{backgroundColor: "green", border:"2px solid black", padding:"10px"}}>
      <h1>Department Component</h1>
      <Student/>
    </div>
  )
}

export default Depart
