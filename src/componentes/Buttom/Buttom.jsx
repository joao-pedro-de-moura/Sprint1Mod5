import React from 'react'

const Buttom = ({Buttom, onClick,className}) => {
  return (
    <button className= {className} onClick={onClick} >{Buttom}</button>
  )
}

export default Buttom