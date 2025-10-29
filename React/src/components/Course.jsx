import React, { useContext } from 'react'
import DataContext, { courseContext } from './DataContext'

function Course() {
    const course = useContext(courseContext)
  return (
    <div style={{backgroundColor: "lightgreen", border:"2px solid black", padding:"10px"}}>
      <h1>Course Component</h1>
      <h2>Course: {course}</h2>
    </div>
  )
}

export default Course
