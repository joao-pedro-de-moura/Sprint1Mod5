import React from 'react'
import Buttom from '../Buttom/Buttom'
import Title from '../Title/Title'
import S from './Header.module.css'
const Header = () => {
  return (
    <header className={S.header}>
    <div className={S.bdSet}/>
    <div className={S.content}>
        <div className={S.texts}>
            <p className={S.paragrafo1}>uma seleção de produtos</p>
            <h1>especial pra você</h1>
            <p className={S.paragrafo2}>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        </div>
        <div>
          <Buttom className={S.Buttom} Buttom = "Conheça a Linx"/>
          <Buttom className={S.Buttom} Buttom = "Ajude o algorítimo"/>
          <Buttom className={S.Buttom} Buttom = "Seus produtos"/>
          <Buttom className={S.Buttom} Buttom = "Compartilhe"/>
        </div>
    </div>
</header>
  )
}

export default Header