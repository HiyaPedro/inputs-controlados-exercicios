import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulário from "../Componentes/Formulario";
import React, {useState} from 'react'

function PaginaDoCartao() {
    //declare os estados aqui
    const[nome, setNome]=useState("")
    const[pagamento, setPagamento]=useState("")
    const[numero, setNumero]=useState("")
    const[validade, setValidade]=useState("")
    const[cvc, setCvc]=useState("")

    //declare as funções de controle de inputs aqui
    const changeNome=(event)=>{
        setNome(event.target.value)
      }
    const changePagamento=(event)=>{
        setPagamento(event.target.value)
      }
    const changeNumero=(event)=>{
        setNumero(event.target.value)
      }
    const changeValidade=(event)=>{
        setValidade(event.target.value)
      }
    const changeCvc=(event)=>{
        setCvc(event.target.value)
      }

      const limparInputs=()=>{
        alert("Seu cartão foi cadastrado com sucesso!")
        setPagamento("")
        setNumero("")
        setNome("")
        setCvc("")
        setValidade("Nenhum")
    
      }

    return (
        <LayoutDaPagina>
            {/* Passe as variáveis de estado para o Cartão. Use Props. */}
            <Cartao
                pagamento={pagamento}
                numero={numero}
                nome={nome}
                cvc={cvc}
                validade={validade}
            />

            {/* Chame o Componente Formulário Aqui */}
            <Formulário 
            
                pagamento={pagamento}
                numero={numero}
                nome={nome}
                cvc={cvc}
                validade={validade}

                changePagamento={changePagamento}
                changeNumero={changeNumero}
                changeNome={changeNome}
                changeCvc={changeCvc}
                changeValidade={changeValidade}

                funcao={limparInputs}
                />
            {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}


        </LayoutDaPagina>

    );
}

export default PaginaDoCartao;
