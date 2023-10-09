import { UsuarioContext } from "../context/UsuarioContext"
import React from "react"

export const Usuario = () => {
    const {usuarios, setUsuarios} = React.useContext(UsuarioContext)

    const { historial = [], idActivo = -1 } = JSON.parse(localStorage.getItem("Historial")) || {};

    console.log(usuarios)

    const posicion = usuarios.findIndex((usuario,i) => i === idActivo)

    const cerrarSesion = () => {
        const newData = {
            historial: [],
            idActivo: -1
          }
          localStorage.setItem("Historial", JSON.stringify(newData));
    }

    return(
        <>
            <div style={{display:'flex', flexDirection: "column", backgroundColor: '#a9a9a952', paddingLeft:'10%', paddingRight:'10%', paddingTop:'1%', paddingBottom:'1%'}}>
                <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '5%' }}>Perfil</h1>
                {posicion !== -1 ?
                    (
                        <p>Email: {usuarios[idActivo].email} <br/> Contraseña: {usuarios[idActivo].contrasenia} <br/> <a onClick={cerrarSesion} href="/">Cerrar Sesión</a></p>
                    )
                    :
                    (
                        <i>No has iniciado sesión...</i>
                    )
                }
            </div>
        </>
    )
}