import React from 'react'

function MyInfo({children, color = "green"}) {
  return (
    <div style={{color:color, backgroundColor: "aquamarine", border: "4px solid black", width: "400px"}}>
      <h1>This is my Info Section: </h1>
      {children}
    </div>
  )
}

export default MyInfo
