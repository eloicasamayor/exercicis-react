import "./App.css";
import GaleriaFotos from "./GaleriaFotos/GaleriaFotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";

function App() {
  return (
    <div className="App">
      <GaleriaFotos />
      <Comptador />
      <Acordio />
      <Carrusel />
      <hr />
    </div>
  );
}

export default App;
