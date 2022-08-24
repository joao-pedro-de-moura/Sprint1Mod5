import React from 'react'
import Input from '../Input/Input'
import S from './Form.module.css'
import Buttom from '../Buttom/Buttom'
import RadioInput from '../RadioInput/RadioInput'

const Form = ({InputTexto1, InputTexto2, InputTexto3, RadioInput1, RadioInput2, Buttom1}) => {
  return (
    <form className = {S.Form}>
        
        <Input className = {S.Input} InputTexto1 = "Seu nome:"/>
        <Input className = {S.Input} InputTexto1 = "E-mail"/>
        <Input className = {S.Input} InputTexto1 = "CPF"/>
        <RadioInput RadioInput1 = "Masculino" RadioInput2 = "Feminino"/>
        <Buttom Buttom={Buttom1}/>
       
    </form>
  )
}

export default Form