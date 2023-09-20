import TVerde from "../../img/Verde.PNG";

export const Verde = () => {
    return (
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "rgb(203 255 196 / 86%)",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
          >
          <p style={{ color: "#4d4d4d", marginTop: "10%" }}> Verde</p>
          <img src={TVerde} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Principalmente botellas o vidrios rotos (o también plásticos limpios). No se utiliza para cerámica o cristal. También se puede usar el amarillo o gris.</p>
        </div>
    )
}