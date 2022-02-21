import { useState } from "react";
export default function TipCalculator() {
  const [percentatgePropina, setPercentatgePropina] = useState(0);
  const [preu, setPreu] = useState(0);
  const [arrodonit, setArrodonit] = useState(false);
  const [numComensals, setNumComensals] = useState(1);

  const evaluarPercentatgePropina = (p) => {
    setPercentatgePropina(p < 100 ? p : 0);
  };

  return (
    <div className="wrapper-tip-calculator">
      <h2>Tip Calculator</h2>
      <form>
        <div>
          <label htmlFor="preu">Preu (€)</label>
          <input
            id="preu"
            type="number"
            value={preu}
            onChange={(event) => setPreu(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="percentatge-propina">Propina (%)</label>
          <input
            htmlFor="percentatge-propina"
            type="number"
            max="100"
            value={percentatgePropina}
            onChange={(event) => evaluarPercentatgePropina(event.target.value)}
          />
        </div>
        <div>
          <label id="number">Propina (€)</label>
          <input
            type="number"
            readOnly
            value={(preu * percentatgePropina) / 100}
          ></input>
        </div>

        <div>
          <label id="preu-amb-propina">Preu amb propina</label>
          <input
            id="preu-amb-propina"
            type="number"
            value={parseFloat(preu) + (preu * percentatgePropina) / 100}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="checkbox-arrodonir">Arrodonir (cap amunt)</label>
          <input
            id="checkbox-arrodonir"
            type="checkbox"
            checked={arrodonit}
            onChange={() => setArrodonit((n) => !n)}
          />
        </div>

        {arrodonit && (
          <div>
            <span id="span-preu-arrodonit">
              <label>Preu amb propina arrodonit</label>
              <input
                type="number"
                value={Math.ceil(
                  parseFloat(preu) + (preu * percentatgePropina) / 100
                )}
                readOnly
              />
            </span>
          </div>
        )}
        <div>
          <label>Comensals</label>
          <input
            type="number"
            value={numComensals}
            onChange={(event) => setNumComensals(event.target.value)}
          />
        </div>

        <div>
          <label>Cadascú pagarà</label>
          <input
            type="number"
            step="0.01"
            value={
              arrodonit
                ? Math.ceil(
                    parseFloat(preu) +
                      parseFloat((preu * percentatgePropina) / 100)
                  ) / numComensals
                : parseFloat(preu) +
                  parseFloat((preu * percentatgePropina) / 100) / numComensals
            }
            readOnly
          />
        </div>
      </form>
    </div>
  );
}
