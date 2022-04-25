import React from "react";
import "../estilos/Testimonio.css";
import Parser from "html-react-parser";
import { objEstudiante1, objEstudiante2, objEstudiante3 } from "./Estudiantes.js";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        class="img-testimonio"
        alt={`Fotografia ${props.imagen}`}
      />
      <div class="contenedor-txt-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">{Parser(props.testimonio)}</p>
      </div>
    </div>
  );
}

export default Testimonio;
