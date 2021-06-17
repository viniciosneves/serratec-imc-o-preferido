import { useState } from 'react'
import './estilos.css'

const Formulario = ({ aoCalcular }) => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')

  const calcular = (evento) => {
    evento.preventDefault()
    const calculo = {
      peso: parseFloat(peso),
      altura: parseFloat(altura)
    }

    calculo.imc = calculo.peso / (calculo.altura * calculo.altura)

    aoCalcular(calculo)
    setPeso('')
    setAltura('')
  } 

  const manipuladorPeso = (evento) => {
    setPeso(evento.target.value);
  }

  const manipuladorAltura = (evento) => {
    setAltura(evento.target.value);
  }

  return (
    <form onSubmit={calcular}>
      <div>
        <label>Peso</label>
        <input required type="number" value={peso} onChange={manipuladorPeso}/>
      </div>
      <div>
        <label>Altura</label>
        <input required type="number" value={altura} onChange={manipuladorAltura}/>
      </div>
      <button>
        Calcular
      </button>
    </form>
  )
}

export default Formulario