import React from 'react'

function Spacer({height}: {height :number}) {
  return (
    <div className='spacer' style={{height:`${height}px`}} ></div>
  )
}

export default Spacer