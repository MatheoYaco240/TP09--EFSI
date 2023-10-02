import { useEffect, useState } from "react";
import SearchableDropdown from "./SearchableDropdown";
import { productos } from "./data/productos";

import TAmarillo from "../img/Amarillo.PNG";
import TAzul from "../img/Azul.PNG";
import TGris from "../img/Gris.PNG";
import TNaranja from "../img/Naranja.PNG";
import TRojo from "../img/Rojo.PNG";
import TVerde from "../img/Verde.PNG";
import { HistorialContext } from "../context/HistorialContext";
import React from "react";
import { useSearchParams } from "react-router-dom";

const Home = (props) => {
  const elHistorial = window.localStorage

  const [resultado, setResultado] = useState("");

  const [nombreTacho, setNombreTacho] = useState("Elegir Tacho...");
  const [src, setSrc] = useState("");
  const [texto, setTexto] = useState("Para elegir un producto, usar el buscador y seleccionar alguna opción disponible para así saber el tacho en el cual se debe tirar.");
  const [colorCard, setColorCard] = useState("");

  const {historial, setHistorial} = React.useContext(HistorialContext)

  useEffect(() => {
    cambiarTacho()
  }, [resultado])

  useEffect(() => {
    console.log("Se guardaron los datos.")
    elHistorial.setItem("Historial", JSON.stringify(historial))
    console.log(historial)
  },[historial])

  const [value, setValue] = useState("Buscar...");

  const determinarTacho = () => {
    const t = (document.getElementById("id").value).toLowerCase()
    console.log(t)

    /* Regex 
    
    const regexGris = /"alimento | comida | ramas | hojas | flor | vela | arcilla | plastilina | ladrillo | pelota | piedra | roca | arena | l[áa]piz | lapicera | colch[óo]n | almohada | yerba | juguete"/
    
    const regexNaranja = /"sucio | mojado | usado | cubierto | bolsa | t[ée] | servilleta"/
    
    const regexVerde = /"vidrio | botella | frasco | bid[oó]n | espejo"/
    
    const regexAzul = /"cart[oó]n | papel | tela | madera | envoltorio | diario"/
    
    const regexAmarillo = /"lata | tuerca | tornillo | clavo | martillo | destornillador | rueda | snack | metal | llave | maceta | cer[áa]mica"/
    
    const regexRojo = /"pila | aerosol | desodorante | bombilla | m[áa]quina | curita | jeringa | reloj | linterna | pastilla | p[íi]ldora | droga | celular | tel[ée]fono | gasolina | teclado | mouse | impresora | televisor | preservativo | encendedor | toallita"/
    */
    
    if (t === "lata de aluminio" || t === "tuercas, tornillos o clavos" || t === "martillo" || t === "destornillador" || t === "rueda de bicicleta" || t === "paquetes de snacks" || t === "cubiertos de metal" || t === "llaves" || t === "maceta" || t === "restos de cerámica" || t === "tanque de metal") {
      setResultado("Tacho Amarillo");
    }
    else if (t === "pila triple a" || t === "aerosol o desodorante vacío" || t === "bombilla de luz" || t === "máquina de afeitar" || t === "curitas o jeringas" || t === "reloj" || t === "linterna" || t === "pastillas/píldoras/drogas" || t === "teléfonos celulares" || t === "bidón de gasolina" || t === "teclado o mouse de computadora" || t === "impresora" || t === "preservativo" || t === "encendedor" || t === "toallitas femeninas") {
      return setResultado("Tacho Rojo");
    }
    else if (t === "vaso/copa de vidrio" || t === "frasco de vidrio" || t === "vaso de plástico" || t === "botella de plástico" || t === "bidón de agua" || t === "botella de alcohol" || t === "espejo") {
      setResultado("Tacho Verde");
    }
    else if (t === "papel sucio o mojado" || t === "cartón sucio/mojado" || t === "cubiertos de plástico" || t === "bolsa de plástico" || t === "bolsita de té" || t === "envase de plástico sucios" || t === "toalla o servilletas de tela" || t === "papel de aluminio usado" || t === "envases de cartón" || t === "algodón") {
      setResultado("Tacho Naranja");
    }
    else if (t === "envoltorio de caramelo" || t === "diario o revista" || t === "folleto publicitario" || t === "caja de cartón" || t === "restos de tela/lana" || t === "cubiertos de madera") {
      setResultado("Tacho Azul");
    }
    else if (t === "restos de alimentos/comida" || t === "ramas u hojas naturales" || t === "ramo de flores" || t === "vela" || t === "arcilla o plastilina" || t === "ladrillos" || t === "pelota de fútbol/basket/voley" || t === "piedras, rocas o arena" || t === "lápiz/lapicera" || t === "colchón o almohada"|| t === "yerba" || t === "juguete") {
      setResultado("Tacho Gris");
    }
    else {
      setResultado("Tacho Gris"); //Por defecto devuelve tacho gris
    }
    const newData = [...historial, {
      producto: document.getElementById("id").value,
      nombreTacho: nombreTacho,
      fecha: new Date()
    }]
    setHistorial(newData)
  };

  const cambiarTacho = () => {
    console.log("entro" + resultado)
    switch (resultado) {
      case "Tacho Amarillo":
        setNombreTacho("Amarillo")
        setSrc(TAmarillo)
        setColorCard("#fffdc4db")
        setTexto("Latas o envases de alimentos y bebidas, bolsas. Elementos metálicos como tornillos, clavos o destornilladores y también cerámica. Si es un envase de vidrio, plástico o metal limpio se puede tirar en el verde, sino también se puede utilizar el gris o el naranja.")
        break;
      case "Tacho Azul":
        setNombreTacho("Azul")
        setSrc(TAzul)
        setColorCard("rgb(196 207 255 / 86%)")
        setTexto("Todo tipo de papeles y cartones, periódicos, revistas, papeles de envolver, folletos publicitarios, elementos de madera o trozos de tela entre otros. Si no se tiene este contenedor, usar el amarillo, narnja o verde (Pero si se encuentra sucio, utilizar el gris).")
        break;
      case "Tacho Gris":
        setNombreTacho("Gris")
        setSrc(TGris)
        setColorCard("rgb(197 197 197 / 86%)")
        setTexto("Principalmente material biodegradable, puede estar mojado o sucio. Se utiliza en caso de tener productos sucios o al no haber otros tipos de tachos.")
        break;
      case "Tacho Naranja":
        setNombreTacho("Naranja")
        setSrc(TNaranja)
        setColorCard("rgb(255 233 196 / 86%)")
        setTexto("Huesos, restos de alimentos, objetos de plástico, etc. Por lo general se tiran objetos sucios. Si no se tiene este contenedor, se utiliza el gris.")
        break;
      case "Tacho Rojo":
        setNombreTacho("Rojo")
        setSrc(TRojo)
        setColorCard("rgb(255 196 196 / 86%)")
        setTexto("Baterias, pilas, insecticidas, aceites, aerosoles, o productos tecnológicos. Residuos hospitalarios infecciosos o que pueden producir enfermedades. Si no se tiene este contenedor, se utiliza el gris.")
        break;
      case "Tacho Verde":
        setNombreTacho("Verde")
        setSrc(TVerde)
        setColorCard("rgb(203 255 196 / 86%)")
        setTexto("Principalmente botellas o vidrios rotos (o también plásticos limpios). No se utiliza para cerámica o cristal. También se puede usar el amarillo o gris.")
        break;
      default: //retorna null porque setea el tacho por defecto. Cuando el usuario seleccione un producto no va a volver a entrar acá, la validación se hace arriba
        return null
        break;
    }
  }

  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "3rem", marginBottom: "4%" }}>
        Buscador de Productos
      </h1>


      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ display: "flex", flexDirection: "column", marginRight: "15%" }}>

          <label style={{ marginBottom: "2%" }}>Ingresar Producto:</label>
          <div style={{ marginBottom: "4%", display: 'flex', alignItems: 'self-start' }}>
            <SearchableDropdown
              options={productos}
              label="name"
              id="id"
              selectedVal={value}
              handleChange={(val) => setValue(val)}
            />
            <button
              type="button"
              style={{
                color: "#343434",
                backgroundColor: "#2fff4ead",
                borderColor: "#a7a7a7",
              }}
              onClick={() => determinarTacho()}
            >
              Buscar
            </button>
          </div>

        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: "950px" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "2%" }}>
            Tacho Correspondiente:
          </h1>
          {
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                className="card"
                style={{
                  display: "flex",
                  margin: "1%",
                  backgroundColor: `${colorCard}`,
                  alignItems: "center",
                  minWidth: "18%",
                  justifyContent: "space-between",
                  maxWidth: '37%'
                }}
              >
                <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
                  {nombreTacho}
                </p>
                <img src={src} alt=""></img>
                <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>{texto}</p>
              </div>
            </div>
          }
        </div>
      </div>

    </>
  );
};

export default Home;
