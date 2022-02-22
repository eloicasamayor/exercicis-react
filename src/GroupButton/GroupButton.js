import { useState } from "react";

export default function GroupButton() {
  let llistaValors = ["A", "B", "C"];
  const [valor, setValor] = useState(0);
  return (
    <div className="groupbutton-wraper">
      <h2>Group button</h2>
      {llistaValors.map((v, i) => (
        <button
          className={i === valor ? "btn-seleccionat" : "btn-no-seleccionat"}
          key={i}
          onClick={() => setValor(i)}
        >
          {llistaValors[i]}
        </button>
      ))}
      <p>{llistaValors[valor]}</p>
    </div>
  );
}
