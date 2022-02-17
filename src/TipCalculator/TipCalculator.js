import { useState } from "react";
export default function TipCalculator() {
  const [preuPerComensal, setResultat] = useState(0);
  const [percentatgePropina, setPercentatgePropina] = useState(0);
  const [propina, setPropina] = useState(0);
  const [preu, setPreu] = useState(0);
  const [numComensals, setNumComensals] = useState(1);
  const [preuAmbPropina, setPreuAmbPropina] = useState(0);

  const calcular = () => {
    setPropina((preu * percentatgePropina) / 100);
    setPreuAmbPropina(() => parseInt(preu) + parseInt(propina));
    //setResultat(() => parseInt(preu) + parseInt(propina));
  };

  const evaluarPercentatgePropina = (p) => {
    setPercentatgePropina(p < 100 ? p : 0);
    console.log("hola");
    setPreuAmbPropina(() => parseInt(preu) + parseInt(propina));
  };

  return (
    <div className="wrapper-tip-calculator">
      <h3>Tip Calculator</h3>
      <form>
        <label>
          <span>Preu:</span>
          <input
            type="number"
            value={preu}
            onChange={(event) => setPreu(event.target.value)}
          />
          €
        </label>
        <label>
          <span>Propina:</span>
          <input
            type="number"
            max="100"
            value={percentatgePropina}
            onChange={(event) => evaluarPercentatgePropina(event.target.value)}
          />
          % (= {propina}€)
        </label>
        <label>
          <span>Preu amb propina:</span>
          <input type="number" value={preuAmbPropina} readOnly />
        </label>

        <label>
          Arrodonir <input type="checkbox" />
        </label>

        <p></p>
        <label>
          Comensals
          <input
            type="number"
            value={numComensals}
            onChange={(event) => setNumComensals(event.target.value)}
          />
        </label>

        <hr />
        <button type="button" onClick={calcular}>
          Calcular
        </button>
        <p></p>
        <label>A cadascú li toca pagar:</label>
        <input type="number" value={preuPerComensal} readOnly />
      </form>
    </div>
  );
}
