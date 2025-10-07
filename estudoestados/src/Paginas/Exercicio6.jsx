import { useState } from 'react';

export default function Exercicio6() {
  const [quantidade, setQuantidade] = useState('');
  const [preco, setPreco] = useState('');
  const [subtotal, setSubtotal] = useState('');
  const [desconto, setDesconto] = useState('');
  const [total, setTotal] = useState('');

  function calcular() {
    const sub = parseFloat(quantidade) * parseFloat(preco);
    const desc = sub * 0.1;
    const tot = sub - desc;

    setSubtotal(sub);
    setDesconto(desc);
    setTotal(tot);
  }

  return (
    <div>
      <h1>Exercício 6</h1>

      <div className="conteudo">
        <form>
          <p>
            Digite a quantidade: <br />
            <input 
              type="text" 
              value={quantidade} 
              onChange={(e) => setQuantidade(e.target.value)} 
            />
          </p>

          <p>
            Digite o preço: <br />
            <input 
              type="text" 
              value={preco} 
              onChange={(e) => setPreco(e.target.value)} 
            />
          </p>

          <input 
            type="button" 
            value="Calcular" 
            onClick={calcular} 
          />
        </form>

        {subtotal && (
          <div>
            <p>Subtotal: R$ {subtotal}</p>
            <p>Desconto (10%): R$ {desconto}</p>
            <p>Total a pagar: R$ {total}</p>
          </div>
        )}

        <a href="/">Voltar</a>
      </div>
    </div>
  );
}
