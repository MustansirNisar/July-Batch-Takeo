import React from 'react'

function Contact({Name, age, course}) {
  return (
    <>
      <h1> This is the Contact Section</h1>
        
        <h4>This is my name: {Name}</h4>
        <h4>This is my age: {age}</h4>
        <h4>This is my course: {course}</h4>
      
    </>
  )
}

export default Contact
