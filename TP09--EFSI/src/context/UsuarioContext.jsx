import React from "react";
import { useEffect } from "react";

export const UsuarioContext = React.createContext();

const UsuarioProvider = (props) => {
    const [usuarios, setUsuarios] = React.useState([
        {
            email: 'myacovino1@gmail.com',
            contrasenia: 'Matheo',
            activo: false
        },
        {
            email: 'hola@gmail.com',
            contrasenia: 'hola',
            activo: false
        },
        {
            email: 'admin',
            contrasenia: 'admin',
            activo: false
        }
    ]);


    return <UsuarioContext.Provider value={{ usuarios, setUsuarios }}>{props.children}</UsuarioContext.Provider>
}

export default UsuarioProvider;
