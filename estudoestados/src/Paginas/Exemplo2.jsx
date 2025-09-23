import { useState } from "react";

export default function Exemplo2() {

const[numero1, setNumero1] = useState(10);
const[numero2, setNumero2] = useState(20);
const [resultado, setResultado] = useState();

function somar ()

{

let n1, n2, n3, resultado;
n1= Number(numero1);
n2= Number(numero2);
n3 =Number(numero3);
somar= (n1 + n2 + n3) /2;

setResultado("A media dos números é " + media);

}

  return (
    <div>
      <h1>Exemplo 2</h1>

      <div className="conteudo">

        <h3>Calculo da Média Aritmética</h3>

        <p>
          O objetivo será o nome do aluno, suas 3 notas e calcular a média.

        </p>

        <form>
<p>
  Nome do Aluno: <br />
  <input type="text" />
</p>

<p>
  Nota 1: <br />
  <input type="text" value={numero1}
  onChange={(e)  => setNumero1(e.target.value) } />
</p>

<p>
  Nota 2: <br />
  
  <input type="text" value={numero2}
  onChange={(e)  => setNumero2(e.target.value) } />
</p>

<p>
  Nota 3: <br />
  <input type="text" value={numero3}
  onChange={(e)  => setNumero3(e.target.value) } />
</p>

<p>

    <input type="button" value="Calcular" />

  </p>
  <p>
  <a href="/">Voltar</a>
</p>

</form>

      </div>




      
    </div>
  );
}
