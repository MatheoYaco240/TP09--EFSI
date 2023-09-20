import React from "react";

export const HistorialContext = React.createContext();

const HistorialProvider = (props) => {
    const [historial, setHistorial] = React.useState([]);

    return <HistorialProvider.Provider value={{historial, setHistorial}}>{props.children}</HistorialProvider.Provider>
}

export default HistorialProvider;
