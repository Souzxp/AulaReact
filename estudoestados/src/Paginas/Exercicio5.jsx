import { useState } from 'react';

export default function Exercicio5() {
  const [lado, setLado] = useState('');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const area = ((lado)* lado);
    setResultado(area);
  }

  return (
    <div>
      <h1>Exercício 5</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite o valor do lado: <br />
            <input 
              type="text" 
              value={lado} 
              onChange={(e) => setLado(e.target.value)} 
            />
          </p>

          <input 
            type="button" 
            value="Calcular" 
            onClick={calcular} 
          />
        </form>

        {resultado && (
          <p>Área do quadrado: {resultado}</p>
        )}

        <a href="/">Voltar</a>
      </div>
    </div>
  );
}
