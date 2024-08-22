import React from 'react'

const Greeting = ({greeting  , name}) => {
  return (
    <div >
      <p> <strong>NAME : </strong> {name}</p>
      <p> <strong>GREETING : </strong> {greeting} </p>
    </div>
  )
}

export default Greeting
