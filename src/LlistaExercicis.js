import Acordio from "./Acordio/Acordio";
import Carrusel from "./Carrusel/Carrusel";
import Comptador from "./Comptador/Comptador";
import GaleriaFotos from "./GaleriaFotos/GaleriaFotos";
import RellotgeAnalogic from "./RellotgeAnalogic/RellotgeAnalogic";
import RellotgeDigital from "./RellotgeDigital/RellotgeDigital";
import SumadorDeNumeros from "./SumadorDeNumeros/SumadorDeNumeros";
import TipCalculator from "./TipCalculator/TipCalculator";
import ToggleButton from "./ToggleButton/ToggleButton";
import GroupButton from "./GroupButton/GroupButton";
import TresEnRatlla from "./TresEnRatlla/TresEnRatlla";
import Arrays1 from "./ExercicisArrays/Arrays1";

const llistaExercicis = [
  { exercici: <ToggleButton />, titol: "Toggle Button", path: "togglebutton" },
  { exercici: <GroupButton />, titol: "Group Button", path: "groupbutton" },
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
  {
    exercici: <TresEnRatlla />,
    titol: "Tres en ratlla",
    path: "tres-en-ratlla",
  },
  {
    exercici: <Arrays1 />,
    titol: "Arrays 1",
    path: "arrays-1",
  },
];

export default llistaExercicis;
