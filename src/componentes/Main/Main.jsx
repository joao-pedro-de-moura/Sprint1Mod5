import React, { useState } from "react";
import { useEffect } from "react";
import Buttom from "../Buttom/Buttom";
import Card from '../Card/Card'
import Form from '../Form/Form'
import Input from "../Input/Input";
import Paragraph from '../Paragraph/paragraph'
import Title from "../Title/Title";
import S from './Main.module.css'


const Main = () => {
  const [produtos, setProdutos] = useState([]);
  const [pagina, setPagina] = useState(1)

  async function handleRequisicao() {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${pagina}`
    );
    const json = await response.json();
    setProdutos([...produtos,...json.products]);
    console.log(produtos)
  }


  useEffect(() => {
    handleRequisicao();
  }, [pagina]);
  

  const nextPage = ()=>{
    setPagina(pagina+ 1)
  }


  return (
    <main>
      <section className = {S.Section1}>
      <Paragraph/>
          <Form InputTexto1 = "Seu nome:" InputTexto2 = "E-mail:" InputTexto3 = "CPF:"/>
      </section>
      <section  className = {S.Section2}>
        <div className = {S.Cards}>
      {produtos.length>0 &&
            produtos.map((item,index) => {
              return(
        <Card className = {S.Card} img ={item.image} titulo ={item.name} descricao ={item.description}   preco ={item.oldPrice}  parcela ={item.price}  op ={item.installments.count}/>
              )
            })}
           </div>
            
      </section>
      <div className = {S.divButton}>
      <Buttom className = {S.Buttom} onClick = {nextPage} Buttom = "Mais Produtos Aqui!"/>
      </div>
      <section className = {S.Section2}>
        <Title  Title3 = "Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"/>
          <div className={S.DivSection3}>
            <Input InputTexto1= "Nome do seu amigo:"/>
            <Input InputTexto1= "Email:"/>
          </div>
          <Buttom className = {S.Buttom} Buttom = "Enviar agora"/>
      </section >
    </main>
  )
}

export default Main