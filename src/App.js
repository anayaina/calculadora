import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla'
import BotonClear from './componentes/BotonClear'
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarinput = valor => {
    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Ingrese Valores para realizar Calculos')
    }
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img
        src= {freecodecampLogo}
        className='freecodecamp-logo'
        alt='Logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarclick={agregarinput}>1</Boton>
          <Boton manejarclick={agregarinput}>2</Boton>
          <Boton manejarclick={agregarinput}>3</Boton>
          <Boton manejarclick={agregarinput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarinput}>4</Boton>
          <Boton manejarclick={agregarinput}>5</Boton>
          <Boton manejarclick={agregarinput}>6</Boton>
          <Boton manejarclick={agregarinput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={agregarinput}>7</Boton>
          <Boton manejarclick={agregarinput}>8</Boton>
          <Boton manejarclick={agregarinput}>9</Boton>
          <Boton manejarclick={agregarinput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarclick={calcularResultado}>=</Boton>
          <Boton manejarclick={agregarinput}>0</Boton>
          <Boton manejarclick={agregarinput}>.</Boton>
          <Boton manejarclick={agregarinput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
