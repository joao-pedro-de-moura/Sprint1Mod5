import React from 'react'
import S from './Card.module.css'
const Card = ({img, titulo, descricao, preco, parcela, op, className}) => {
  return (
    <div className = {className}>
        <img src = {img}/>
        <h4>{titulo}</h4>
        <p>{descricao}</p>
        <p>{preco}</p>
        <h2>{parcela}</h2>
        <p>{op}</p>
    </div>
  )
}

export default Card