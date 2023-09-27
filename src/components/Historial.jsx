import { useContext } from "react"
import ListaTachos from "./ListaTachos"

export const Historial = (props) => {    
    return(
        <div>
            <h1 style={{ fontWeight: "bold", fontSize: "3rem", marginBottom: "4%" }}>Historial de búsqueda</h1>
            <ListaTachos />
        </div>
    )
}