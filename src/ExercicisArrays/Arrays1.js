import { useEffect, useRef, useState } from "react";
export default function Arrays1() {
  let llistaOpcionsSelect = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [numInputs, setNumInputs] = useState(2);
  const [arrayValors, setArrayValors] = useState([]);
  const selectRef = useRef();
  const inputsRefs = useRef([]);
  const [valorMaxim, setValorMaxim] = useState();
  const [valorMinim, setValorMinim] = useState();
  const [valorMitjana, setValorMitjana] = useState();

  const pintarElsInputs = () => {
    setNumInputs(selectRef.current.value);
    for (let i = 0; i++; i < selectRef.current.value) {
      return <input key={i}></input>;
    }
  };
  const refrescarArrayValors = () => {
    let llistaProvisinalValors = [];
    Object.values(inputsRefs.current).forEach((i) => {
      if (i !== null) {
        llistaProvisinalValors.push(i.value);
      }
    });
    setArrayValors(llistaProvisinalValors);
  };
  useEffect(() => {
    refrescarArrayValors();
  }, [numInputs]);

  useEffect(() => {
    let max = 0;
    let min = Infinity;
    let avg = 0;
    for (let i = 0; i < arrayValors.length; i++) {
      let valor = arrayValors[i] === "" ? 0 : arrayValors[i];
      if (valor > max) {
        max = valor;
      }
      if (valor < min) {
        min = valor;
      }
      avg = parseInt(avg) + parseInt(valor);
    }
    avg = avg / arrayValors.length;
    setValorMaxim(max);
    setValorMinim(min);
    setValorMitjana(avg.toFixed(3));
  }, [arrayValors]);

  return (
    <div className="arrays1-wrapper">
      <h1>Arrays 1</h1>
      <div className="arrays1-flex">
        <div>
          <span>Quants valors vols?</span>
          <select ref={selectRef} onChange={() => pintarElsInputs()}>
            {llistaOpcionsSelect.map((v, i) => (
              <option key={i}>{v}</option>
            ))}
          </select>
          <div className="div-inputs-array1">
            {Array.from({ length: numInputs }, (_, i) => (
              <input
                type="number"
                max="999"
                key={i}
                className="input-array1"
                ref={(el) => (inputsRefs.current[i] = el)}
                onChange={refrescarArrayValors}
              />
            ))}
          </div>
        </div>
        <div className="col2">
          <span className="resultat-calcul">Valor màxim={valorMaxim}</span>
          <span className="resultat-calcul">
            Valor mínim={valorMinim === "" ? "0" : valorMinim}
          </span>
          <span className="resultat-calcul">Mitjana={valorMitjana}</span>
        </div>
      </div>
    </div>
  );
}
