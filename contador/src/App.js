import "./App.css";
import Logo from "./img/logo.png";
import Boton from "./componentes/Boton.js";
import Contador from "./componentes/Contador.js";
import { useState } from "react";

function App() {
  const [numClic, setNumClic] = useState(0);

  const manejarClic = () => {
    setNumClic(numClic + 1);
  };

  const reiniciarContador = () => {
    setNumClic(0);
  };

  return (
    <div className="App">
      <div className="contenedor-logo">
        <img className="logo-fcc" alt="" src={Logo} />
      </div>
      <Contador numClic={numClic}></Contador>
      <div className="contenedor-btn">
        <Boton
          texto="Clic"
          esBotonClic={true}
          manejarClic={manejarClic}
        ></Boton>
        <Boton
          texto="Reiniciar"
          esBotonClic={false}
          manejarClic={reiniciarContador}
        ></Boton>
      </div>
    </div>
  );
}

export default App;
