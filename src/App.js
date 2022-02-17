import "./App.css";
import GaleriaFotos from "./GaleriaFotos/GaleriaFotos";
import Comptador from "./Comptador/Comptador";
import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";
import SumadorDeNumeros from "./SumadorDeNumeros/SumadorDeNumeros";
import TipCalculator from "./TipCalculator/TipCalculator";

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
      <SumadorDeNumeros />
      <TipCalculator />
      <hr />
    </div>
  );
}

export default App;
