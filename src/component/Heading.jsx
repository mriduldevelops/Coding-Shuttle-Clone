import React from 'react'

function Heading(props) {
    const color={
        color:props.color,
    }
  return (
    <>
      <div className="section-heading">       
          <h5 style={color}>{props.h5}</h5>
          <h1>{props.h1} <span style={color}>{props.span}</span></h1>
      </div>
    </>
  )
}

export default Heading
