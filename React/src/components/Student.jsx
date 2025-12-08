import React, { createContext, useContext } from 'react'
import Course from './Course'
import { courseContext } from './DataContext'

function Student() {
    const course = useContext(courseContext)
  return (
    <div style={{backgroundColor: "violet", border:"2px solid black", padding:"10px"}}>
      <h1>Student Component</h1>
      <h2>Course: {course}</h2>
      <Course/>
    </div>
  )
}

export default Student
