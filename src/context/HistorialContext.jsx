import React from "react";
import { useEffect } from "react";

export const HistorialContext = React.createContext();

const HistorialProvider = (props) => {
    const [historial, setHistorial] = React.useState([]);


    return <HistorialContext.Provider value={{ historial, setHistorial }}>{props.children}</HistorialContext.Provider>
}

export default HistorialProvider;
