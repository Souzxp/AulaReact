import { useState } from 'react';

export default function Exercicio2() {
  const [numero, setNumero] = useState(0); 
  const [resultado, setResultado] = useState(null); 

  function calcular() {
    const fahrenheit = Number(numero);
    const celsius = (fahrenheit - 32) * 5 / 9; 
    setResultado(celsius.toFixed(2)); 
  }

  return (
    <div>
      <h1>Exercício 2</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite a temperatura em grau Fahrenheit: <br />
            <input 
              type="text" 
              value={numero} 
              onChange={(e) => setNumero(e.target.value)} 
            />
          </p>
          <input 
            type="button" 
            value="Calcular" 
            onClick={calcular} 
          />
        </form>

        {resultado !== null && (
          <p>Temperatura em Celsius: {resultado} °C</p>
        )}

        <a href="/">Voltar</a>
      </div>
    </div>
  );
}
