import React from 'react'

function ReUse({data}) {
  return (
    <div>
      <h2>Name: {data.name}</h2>
      <h2>Id: {data.id}</h2>
      <h2>Email: {data.email}</h2>
        <hr />
    </div>
  )
}

export default ReUse
