import React from 'react'
import Input from '../Input/Input'
import S from './Form.module.css'
import Buttom from '../Buttom/Buttom'
import RadioInput from '../RadioInput/RadioInput'

const Form = ({InputTexto1, InputTexto2, InputTexto3, RadioInput1, RadioInput2, Buttom1}) => {
  return (
    <form className = {S.Form}>
        
        <Input InputTexto1 = {InputTexto1}  InputTexto2 = {InputTexto2} InputTexto3 = {InputTexto3}/>
        <RadioInput RadioInput1 = {RadioInput1} RadioInput2 = {RadioInput2}/>
        <Buttom Buttom={Buttom1}/>
       
    </form>
  )
}

export default Form