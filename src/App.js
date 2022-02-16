import "./App.css";
import GaleriaFotos from "./GaleriaFotos/GaleriaFotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";

function App() {
  return (
    <div className="App">
      <GaleriaFotos />
      <Comptador />
      <Acordio />
      <Carrusel />
      <TresEnRatlla />
      <RellotgeDigital />
      <RellotgeAnalogic />
      <hr />
    </div>
  );
}

export default App;
