import React from "react";
import "./count.css"

// aca hago la funcion del count, con una prop para posteriormente pasarle el numero que tenga el estado
export const Count = ({ numClicks }) => {
    return (
        <div className="count">{numClicks}</div>
    )
}