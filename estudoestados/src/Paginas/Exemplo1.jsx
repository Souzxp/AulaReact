import { useState } from "react";

export default function Exemplo1() {

const[numero1, setNumero1] = useState(22);
const[numero2, setNumero2] = useState(5);
const [resultado, setResultado] = useState();

function somar ()

{

let n1, n2, soma;
n1= Number(numero1);
n2= Number(numero2);
soma= n1 + n2;

setResultado("A soma dos números é " + soma);

}

function limpar ()

{

}


  return (
    <div>
      <h1>Exemplo 1</h1>

      <div className="conteudo">

        <h3>Exemplo do useState</h3>

        <p>
          O objetivo aqui será receber dois números, soma-los, e exibir o resultado.
        </p>

        <form>
<p>
  Digite o primeiro número <br />
  <input type="text" value={numero1}
  onChange={(e)  => setNumero1(e.target.value) } />
</p>

  <p>
    Digite o segundo número <br />
    <input type="text"value={numero2} 
 onChange={(e)  => setNumero2(e.target.value) } />

  </p>


  <p>

    <input type="button" value="Calcular" onClick={somar} />
  </p>

<p>
Número1 = {numero1} <br />
Número2 = {numero2}
{resultado}
</p>

<p>
  <a href="/">Voltar</a>
</p>


        </form>


      </div>

      
    </div>
  );
}
