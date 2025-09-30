import {useState} from 'react';

export default function exercicio2() {
  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState();


function calcular()
let fahrenhait = Number(numero) 
let celsius = (fahrenhait - 32) * 5 / 9



    return (
      <div>
        <h1>Exercício 2</h1>
  
        <div className="conteudo">
  
        
          <form>
  <p>
    Digite a temperatura em grau fahrenhait: <br />
    <input type="text" />
  </p>
  
  
  
      <input type="button" value="Calcular" />
  </form>
  
  <a href="/"voltar></a>
   </div>
  
  
  
  
        
      </div>
    );
  }
  