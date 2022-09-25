import React from 'react';
import '../hojas-de-estilo/Boton.css'
import '../hojas-de-estilo/BotonClear.css'


function Boton(props) {
  const esOperador  = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  if (esOperador(props.children)) {
    return (
      <div
        className= 'boton-contenedor operador'
        onClick = {() => props.manejarclick(props.children)}>
          {props.children}
      </div>
    );
  } else {
    return(
      <div
        className= 'boton-contenedor'
        onClick = {() => props.manejarclick(props.children)}>
          {props.children}
      </div>
    );
  }
}

export default Boton;