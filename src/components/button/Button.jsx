import React from "react";
import "./button.css"

// primero lo que hago es crear la funcion general del boton, van a se 2, uno de click que aumente cada vez que lo tocamos y otro de reset, para poner ese mismo en 0
// dentro de button tengo 3 props, la primera que define el contenido , el segundo para cambiar la clase segun el boton, y la 3ra para su respectiva funcion
export const Button = ({ text, isClick, click }) => {

    return (
        <button onClick={click} className={isClick ? "buttonClick" : "buttonReset"} > {text}</button>
    )
}


