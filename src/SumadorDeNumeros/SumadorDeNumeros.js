import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

export default function SumadorDeNumeros() {
  const [total, setTotal] = useState(0);
  const [numero, setNumero] = useState(0);

  const SumarNumeroAlTotal = () => {
    setTotal((n) => parseInt(n) + parseInt(numero));
    setNumero(0);
  };
  const Reset = () => {
    setTotal(0);
    setNumero(0);
  };
  return (
    <div className="sumador-numeros-wrapper">
      <h2>Sumador de Números</h2>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          value={numero}
          onChange={(event) => setNumero(event.target.value)}
        ></input>
      </div>

      <div>
        <label>Total:</label>
        <input type="number" readOnly value={total}></input>
      </div>

      <button onClick={SumarNumeroAlTotal}>Sumar</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
