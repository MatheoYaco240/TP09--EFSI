import TAmarillo from "../../img/Amarillo.PNG";

export const Amarillo = () => {
    return(
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "#fffdc4db",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
        >
          <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
            Amarillo
          </p>
          <img src={TAmarillo} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Latas o envases de alimentos y bebidas, bolsas. Elementos metálicos como tornillos, clavos o destornilladores y también cerámica. Si es un envase de vidrio, plástico o metal limpio se puede tirar en el verde, sino también se puede utilizar el gris o el naranja.</p>
        </div>
    )
}