import React from 'react'
import Buttom from '../Buttom/Buttom'
import Title from '../Title/Title'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className = {S.Header}>
        <Title Title1 = "Uma seleção de produtos" Title2 = "Especial para você" Title3 = "Todos os produtos dessa lista foram selecionados a partir da sua navegação"/>
        <div>
            <Buttom Buttom = "Conheça Linx" />
            <Buttom Buttom = "Conheça o algoritmo" />
            <Buttom Buttom = "Seus Produtos" />
            <Buttom Buttom = "Compartilhe" />
        </div>
    </header>
  )
}

export default Header