import { useState } from 'react';

export default function Exercicio4() {
  const [base, setBase] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const area = (parseFloat(base) * parseFloat(altura)) / 2;
    setResultado(area);
  }

  return (
    <div>
      <h1>Exercício 4</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite o valor da base: <br />
            <input 
              type="text" 
              value={base} 
              onChange={(e) => setBase(e.target.value)} 
            />
          </p>

          <p>
            Digite o valor da altura: <br />
            <input 
              type="text" 
              value={altura} 
              onChange={(e) => setAltura(e.target.value)} 
            />
          </p>

          <input 
            type="button" 
            value="Calcular" 
            onClick={calcular} 
          />
        </form>

        {resultado && (
          <p>Área do triângulo: {resultado}</p>
        )}

        <a href="/">Voltar</a>
      </div>
    </div>
  );
}
