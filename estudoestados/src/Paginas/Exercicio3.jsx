import { useState } from 'react';

export default function Exercicio3() {
  const [valor, setValor] = useState('0');
  const [taxa, setTaxa] = useState('0');
  const [tempo, setTempo] = useState('0');
  const [resultado, setResultado] = useState('');

  function calcular() {
    const valorNumerico = Number(valor);
    const taxaNumerica = Number(taxa);
    const tempoNumerico = Number(tempo);

   
    const parcela = valorNumerico + (valorNumerico * ((taxaNumerica, 2) / 100) * tempoNumerico);
    setResultado(parcela.toFixed(2));
  }

  return (
    <div>
      <h1>Exercício 3</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite o valor da prestação: <br />
            <input 
              type="text" 
              value={valor} 
              onChange={(e) => setValor(e.target.value)} 
            />
          </p>

          <p>
            Digite a taxa de juros (em %): <br />
            <input 
              type="text" 
              value={taxa} 
              onChange={(e) => setTaxa(e.target.value)} 
            />
          </p>

          <p>
            Digite o tempo (em dias) de atraso: <br />
            <input 
              type="text" 
              value={tempo} 
              onChange={(e) => setTempo(e.target.value)} 
            />
          </p>

          <input 
            type="button" 
            value="Calcular" 
            onClick={calcular} 
          />
        </form>

     
        {resultado && (
          <p>Valor da parcela atualizado: R$ {resultado}</p>
        )}

        <a href="/">Voltar</a>
      </div>
    </div>
  );
}
