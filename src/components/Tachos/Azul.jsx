import TAzul from "../../img/Azul.PNG";

export const Azul = () => {
    return (
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "rgb(196 207 255 / 86%)",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
        >
          <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
            {" "}
            Azul{" "}
          </p>
          <img src={TAzul} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Todo tipo de papeles y cartones, periódicos, revistas, papeles de envolver, folletos publicitarios, elementos de madera o trozos de tela entre otros. Si no se tiene este contenedor, usar el amarillo, narnja o verde (Pero si se encuentra sucio, utilizar el gris).</p>
        </div>
    )
}