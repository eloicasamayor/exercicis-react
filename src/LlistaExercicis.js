import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import Comptador from "./Comptador/Comptador";
import GaleriaFotos from "./GaleriaFotos/GaleriaFotos";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import SumadorDeNumeros from "./SumadorDeNumeros/SumadorDeNumeros";
import TipCalculator from "./TipCalculator/TipCalculator";

const llistaExercicis = [
  { exercici: <Acordio />, titol: "Acordio", path: "acordio" },
  { exercici: <Carrusel />, titol: "Carrusel", path: "carrusel" },
  { exercici: <Comptador />, titol: "Comptador", path: "comptador" },
  {
    exercici: <GaleriaFotos />,
    titol: "Galeria de fotos",
    path: "galeria-de-fotos",
  },
  {
    exercici: <RellotgeDigital />,
    titol: "Rellotge digital",
    path: "rellotge-digital",
  },
  {
    exercici: <RellotgeAnalogic />,
    titol: "Rellotge analògic",
    path: "rellotge-analogic",
  },
  {
    exercici: <SumadorDeNumeros />,
    titol: "Sumador de números",
    path: "sumador-numeros",
  },
  {
    exercici: <TipCalculator />,
    titol: "Tip Calculator",
    path: "tip-calculator",
  },
];

export default llistaExercicis;
