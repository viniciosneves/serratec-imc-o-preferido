import Card from "../Card"

const ResultadoIMC = (props) => {

  const imcArredondado = Math.round(props.imc)

  let mensagem = ''

  // MENOR QUE 18,5	MAGREZA	
  // ENTRE 18,5 E 24,9	NORMAL	
  // ENTRE 25,0 E 29,9	SOBREPESO	
  // ENTRE 30,0 E 39,9	OBESIDADE	
  // MAIOR QUE 40,0	OBESIDADE GRAVE

  if (props.imc < 18.5) {
    mensagem = 'Você está abaixo do seu peso ideal'
  } else if (props.imc < 24.9) {
    mensagem = 'Você está no seu peso ideal'    
  } else if (props.imc < 29.9) {
    mensagem = 'Você está acima do seu peso ideal'    
  } else {
    mensagem = 'Você está muito acima do seu peso ideal'
  }

  return (
    <Card>
      <ul>
        <li>Seu peso: <strong>{props.peso}</strong>KG</li>
        <li>Sua altura: <strong>{props.altura}</strong>m</li>
      </ul>
      <p>
        O seu IMC é <em>{imcArredondado}</em>.
      </p>
      <p>{mensagem}</p>
    </Card>
  )
}

export default ResultadoIMC