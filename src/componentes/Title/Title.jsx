import React from 'react'
import S from './Title.module.css'
const Title = ({Title1, Title2, Title3}) => {
  return (
    <div className = {S.Title}>
    <h2 className = {S.Title1}>{Title1}</h2>
    <h1 className = {S.Title2}>{Title2}</h1>
    <h4 className = {S.Title3}>{Title3}</h4>
    </div>
  )
}

export default Title