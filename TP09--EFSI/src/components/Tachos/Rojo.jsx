import TRojo from "../../img/Rojo.PNG";

export const Rojo = () => {
    return (
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "rgb(255 196 196 / 86%)",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
          >
          <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
            {" "}
            Rojo{" "}
          </p>
          <img src={TRojo} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Baterias, pilas, insecticidas, aceites, aerosoles, o productos tecnológicos. Residuos hospitalarios infecciosos o que pueden producir enfermedades. Si no se tiene este contenedor, se utiliza el gris.</p>
        </div>
    )
}