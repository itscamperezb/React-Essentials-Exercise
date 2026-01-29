import React, { useState } from "react";

import "../index.css";

//es usual que las funciones que responden ante eventos se le denomine como "handle", "handleClick", "handleSound", etc

function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : undefined}
        onClick={props.onSelect}
      >
        {props.children}
      </button>
    </li>
    //NOTA: cuando escribo una funcion dentro de un event como "onClick" esta funcion la debo llamar sin usar los () ya que al ponerlos
    // hace que la funcion se ejecute cuando la linea de codigo <button> se ejecute. pero yo en verdad lo que quiero es que se ejecute cuando
    //yo le de click al button
  );
}

// Children es una keyword que hace referencia al contenido dentro de los componentes utilizados (puede ser texto o complex jsx structure)
// en este caso hace referenica a "Components" que está escrito en el app.jsx (<TabButton>Components</TabButton>)
export default TabButton;
