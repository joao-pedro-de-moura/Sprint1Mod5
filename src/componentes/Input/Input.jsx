import React from 'react'
import S from './Input.module.css'
const Input = ({InputTexto1,className}) => {
  return (
    <div className = {className}>
        <label for="input">{InputTexto1}</label>
        <input type="text" id="input" name="input"/>
    </div>
  )
}

export default Input