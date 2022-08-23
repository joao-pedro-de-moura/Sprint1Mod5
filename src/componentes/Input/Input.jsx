import React from 'react'
import S from './Input.module.css'
const Input = ({InputTexto1,InputTexto2,InputTexto3}) => {
  return (
    <div className = {S.Input}>
        <label for="input">{InputTexto1}</label>
        <input type="text" id="input" name="input"/>
        <label for="input">{InputTexto2}</label>
        <input type="text" id="input" name="input"/>
        <label for="input">{InputTexto3}</label>
        <input type="text" id="input" name="input"/>
        
    </div>
  )
}

export default Input