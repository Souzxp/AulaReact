import { useState } from 'react';

export default function Exercicio7() {

  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');

  const [resultado, setResultado] = useState('');

  function calcular() {
    const resultado = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
    setResultado(resultado);
  }

  return (
    <div>
      <h1>Exercicio 7</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite a nota 1: <br />
            <input
              type="text"
              value={nota1}
              onChange={(e) => setNota1(e.target.value)}
            />
          </p>
         
          <p>
            Digite a nota 2: <br />
            <input
              type="text"
              value={nota2}
              onChange={(e) => setNota2(e.target.value)}
            />
          </p>

          <p>
            Digite a nota 3: <br />
            <input
              type="text"
              value={nota3}
              onChange={(e) => setNota3(e.target.value)}
            />
          </p>

          <p>
            <input type="button" value="Calcular" onClick={calcular} />
          </p>

          <p>
            Resultado= {resultado} <br />
            <br />
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