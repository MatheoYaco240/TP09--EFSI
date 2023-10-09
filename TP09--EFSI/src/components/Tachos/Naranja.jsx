import TNaranja from "../../img/Naranja.PNG";

export const Naranja = () =>{
    return (
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "rgb(255 233 196 / 86%)",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
          >
          <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
            {" "}
            Naranja
          </p>
          <img src={TNaranja} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Huesos, restos de alimentos, objetos de plástico, etc. Por lo general se tiran objetos sucios tales como papeles, envases de plástico o cartón. Sino se tiene este contenedor se utiliza el gris.</p>
        </div>
    )
}