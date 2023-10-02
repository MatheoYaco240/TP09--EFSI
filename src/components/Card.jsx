import React from "react"

const Card = (props) => {
    return (
      <div>
        <h5>Nombre: {props.producto}</h5>
        <h5>Tacho: {props.nombreTacho}</h5>
        <h5>Fecha: {props.fecha}</h5>
      </div>
    )
}

export default Card;