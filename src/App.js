import { useState } from "react";
import Formulario from "./componentes/Formulario";
import ResultadoIMC from "./componentes/ResultadoIMC";

function App() {

  const [resultados, setResultados] = useState([])

  const incrementarResultado = (novoResultado) => {
    setResultados([
      novoResultado,
      ...resultados
    ])
  }

  return (
    <div className="App">
      <h1>Calculadora de índice de massa corporal</h1>
      <Formulario aoCalcular={incrementarResultado}/>
      {
        resultados.map((resultado, indice) => 
        <ResultadoIMC 
          key={indice}
          peso={resultado.peso} 
          altura={resultado.altura} 
          imc={resultado.imc} 
        />)
      }

      
    </div>
  );
}

export default App;
