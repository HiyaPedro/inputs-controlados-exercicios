//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React from 'react';


function Formulário({nome,changeNome, pagamento,changePagamento, numero,changeNumero, validade,changeValidade, cvc,changeCvc, funcao}) {

// const{nome,changeNome}=props

    return (
        
            <form>
                
                <label>
                    Nome da pessoa:
                    <input value={nome} onChange={changeNome} />
                </label>
                <label>
                    Forma de pagamento:
                    <input value={pagamento} onChange={changePagamento} />
                </label>
                <label>
                    Número do cartão:
                    <input value={numero} onChange={changeNumero} />
                </label>
                <label>
                    Data de validade:
                    <input value={validade} onChange={changeValidade} />
                </label>
                <label>
                    CVC:
                    <input value={cvc} onChange={changeCvc} />
                </label>
                <button onClick={funcao}>Enviar dados</button>
            </form>

    )
}
export default Formulário