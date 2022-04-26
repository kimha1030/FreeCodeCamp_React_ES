import React from "react";
import logo from "../imagenes/fcc_primary_large.svg";
import "../estilos/Logo.css";

const Logo = () => (
  <div className="contenedor-logo">
    <img src={logo} className="logo" alt="logo" />
  </div>
);

export default Logo;
