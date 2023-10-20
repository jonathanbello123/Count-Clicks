import React, { useState } from "react";
import { Button } from "./components/button/button"
import { Count } from "./components/count/count";
import "./App.css"


export const App = () => {
  // seteo un estado para poder cambiar el valor del div que va llevar el contador, lo inicializo en 0
  const [clicks, setClicks] = useState(0)
  // creo la funcion para el boton que va sumar los clicks
  // hago que el setclicks cambie  y su cambio es sumar el click  +1
  const isClick = () => {
    setClicks(clicks + 1)
  }
  // esta funcion es para  el boton que va resetear esos clicks
  const reset = () => {
    //simplemente le voy a decir que cuando se haga click el estado va a ser 0
    setClicks(0)
  }
  // aca a count le paso su props, que empieza a ser "clicks" basicamente el estado.
  return (
    <div className="App">
      <div>
        <h1>Contador de Clicks</h1>
        <Count numClicks={clicks} />
        <div className="button-container">
          <Button click={isClick} isClick={true} text={"Click"} />
          <Button click={reset} isClick={false} text={"Reset"} />
        </div>

      </div>
    </div>
  )
}