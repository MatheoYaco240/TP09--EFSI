import TGris from "../../img/Gris.PNG";

export const Gris = () => {
    return (
        <div
          className="card"
          style={{
            display: "flex",
            margin: "1%",
            backgroundColor: "rgb(197 197 197 / 86%)",
            alignItems: "center",
            minWidth: "18%",
            justifyContent: "space-between",
            maxWidth: '20%'
          }}
        >
          <p style={{ color: "#4d4d4d", marginTop: "10%", fontSize: "1.9rem" }}>
            {" "}
            Gris{" "}
          </p>
          <img src={TGris} alt=""></img>
          <p style={{ fontSize: '1.2rem', color: '#4d4d4d' }}>Principalmente material biodegradable, puede estar mojado o sucio. También se utiliza en caso de tener productos sucios, húmedos o en mal estado o al no haber otros tipos de tachos disponibles.</p>
        </div>
    )
}