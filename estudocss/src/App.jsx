import "./App.css";

export default function App()
{

const centralizado = {textAlign: "center"};

const destaque = {
    textAlign: "center",
    border : "2px solid magenta",
    color : "pink",
    padding : "10px"

}

    return (
        <div>
            <h1>Estudo CSS</h1>

            <p>
                O CSS (<i>Cacasding Style Sheets</i>) é uma linguagem utilizada para estilizar <b>página web</b>, e será utilizada dentro ou fora do HTML.
            </p>
            
<p>
    Na aula de hoje, vamos estudar e entender como aplicar estilos CSS em componentes do React.
</p>

            
<p>
    Uilizando o CSS podemos definir: 
</p>

<ul>
    <li>Definir cor para o texto, para o fundo do elemento </li>
    <li>Fontes e tamanhos de letras</li>
    <li>Posicionamneto dos elementos na página</li>
    <li>Espaçamneto, bordas, sombras, etc...</li>
    <li>Efeitos visuais e animacões</li>
</ul>

<p>
    O HTML diz o que deve aparecer na página, enquanto o CSS diz como deve aparecer.
</p>

<p className="centro">
    Cidade Tapiratiba
</p>

<p style={centralizado}>
<img src="tapiratiba1.jpg" alt= "" />
</p>

<h3 style={destaque} Fim da aula</h3>

        </div>
    );
}