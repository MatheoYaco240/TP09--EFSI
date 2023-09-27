//componente que haga el map del array de tachos en el contextstate
import Card from "./Card";
import { HistorialContext } from "../context/HistorialContext";
import React from "react";

const ListaTachos = () => {
    const {historial} = React.useContext(HistorialContext);
    console.log('hasta aca anda')
    return historial.map((tacho, i) => <Card key={i} {...tacho} posicion={i}/>)
}

export default ListaTachos;