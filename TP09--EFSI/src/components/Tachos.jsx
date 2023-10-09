import TAmarillo from "../img/Amarillo.PNG";
import TAzul from "../img/Azul.PNG";
import TGris from "../img/Gris.PNG";
import TNaranja from "../img/Naranja.PNG";
import TRojo from "../img/Rojo.PNG";
import TVerde from "../img/Verde.PNG";

import { Amarillo } from "./Tachos/Amarillo";
import { Azul } from "./Tachos/Azul";
import { Gris } from "./Tachos/Gris";
import { Naranja } from "./Tachos/Naranja";
import { Rojo } from "./Tachos/Rojo";
import { Verde } from "./Tachos/Verde";

const Tachos = () => {
  return (
    <>
      <h1 style={{ fontWeight: "bold", fontSize: "3rem", marginBottom: "4%" }}>
        Clases de Tachos
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Amarillo />

        <Azul />

        <Gris />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Naranja />

        <Rojo />

        <Verde />
      </div>
    </>
  );
};

export default Tachos;
