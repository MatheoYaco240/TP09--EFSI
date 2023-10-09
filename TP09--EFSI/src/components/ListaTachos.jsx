//componente que haga el map del array de tachos en el contextstate
import Card from "./Card";
import React from "react";
import { useEffect, useState } from "react";

const ListaTachos = () => {
  
    const [historial2, setHistorial2] = useState(() => {
      const storedHistorial = JSON.parse(localStorage.getItem("Historial"));
      return storedHistorial || [];
    });
  
    const limpiarLista = () => {
      const newData = {
        historial:[],
        idActivo: historial2.idActivo
      }
      //localStorage.removeItem("Historial");
      setHistorial2(newData); // Limpiar el estado local
    };
  
    useEffect(() => {
      // Guardar historial2 en el localStorage cada vez que historial2 cambie
      localStorage.setItem("Historial", JSON.stringify(historial2));
    }, [historial2]);
  
    return (
      <>
        {historial2.historial != null &&
        historial2.historial.map((tacho, i) => (
          <Card key={i} {...tacho} posicion={i} />
        ))}
        <button onClick={limpiarLista}>Borrar Lista</button>
      </>
    );
  };

export default ListaTachos;