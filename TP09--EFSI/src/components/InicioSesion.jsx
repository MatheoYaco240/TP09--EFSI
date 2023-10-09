import { UsuarioContext } from "../context/UsuarioContext"
import React, { useEffect } from "react";

export const InicioSesion = () => {
    const elHistorial = window.localStorage

    useEffect(() => {
        elHistorial.setItem("Historial", JSON.stringify({ historial: [], idActivo: -1 }))
    },[])
    
    const {usuarios, setUsuarios} = React.useContext(UsuarioContext)

    const [href, setHref] = React.useState("#")

    const [typeInput, setTypeInput] = React.useState("password")

    const mostrarPassword = () => {
        const togglePassword = document.querySelector("#togglePassword");
        //const password = document.querySelector("#password");

        togglePassword.addEventListener("click", function () {
            // toggle the type attribute
            //const type = password.getAttribute("type") === "password" ? "text" : "password";
            const type = typeInput === "password" ? "text" : "password";
            //password.setAttribute("type", type);
            setTypeInput(type);

            // toggle the icon
            //this.classList.toggle("bi-eye");
        });
    }

    const validacion = () => {
        const email = document.getElementById("email").value, contrasenia = document.getElementById("password").value
        const posicion = usuarios.findIndex((usuario) => usuario.email === email && usuario.contrasenia === contrasenia)
        if(posicion !== -1){
            const { historial = [], idActivo = -1 } = JSON.parse(localStorage.getItem("Historial")) || {};
            const newData = {
                historial: historial,
                idActivo: posicion
              }
              localStorage.setItem("Historial", JSON.stringify(newData));
            setHref("/home")
        }
        else{
            console.error("Error: Usuario no econtrado")
            setHref("#")
        }
    }

    return (
        <>
            <h1 style={{ fontWeight: 'bold', fontSize: '3rem', marginBottom: '5%' }}>Inicio de Sesión</h1>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', marginBottom: '2%' }}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="text" placeholder="admin" style={{marginBottom: '5%'}}/>

                <label htmlFor="email">Contraseña:</label>
                <div>
                    <input name="password" id="password" type={typeInput} placeholder="admin"/>
                    <button style={{ cursor: "pointer" }} className="bi bi-eye-slash" id="togglePassword" onClick={mostrarPassword}>𓂀</button>
                </div>
            </div>

            <a style={{ fontSize: '1.3rem', marginBottom: '2%', backgroundColor: '#1b33d1b8' }} onClick={validacion} href={href} className='btn text-light'>Iniciar Sesión</a>
        </>
    )
}