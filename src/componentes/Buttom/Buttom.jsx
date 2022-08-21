import React from 'react'
import S from './Buttom.module.css'
const Buttom = ({Buttom}) => {
  return (
    <button className = {S.Buttom}>{Buttom}</button>
  )
}

export default Buttom