import { useRef, useState } from "react";

export default function Arrays2() {
  const [arrayNumeros, setArrayNumeros] = useState([1, 2, 3, 4, 5, 6, 7]);
  const refInputValor = useRef();
  const refInputPosicio = useRef();
  const afegir = () => {
    let arrayProvisional = [...arrayNumeros];
    arrayProvisional[refInputPosicio.current.value] =
      refInputValor.current.value;
    setArrayNumeros(arrayProvisional);
  };
  return (
    <div className="arrays2-wrapper">
      <h2>Array2</h2>
      <div>
        <p>
          Afegir el valor: <input ref={refInputValor} />
        </p>
        <p>
          En la posició: <input ref={refInputPosicio} />
        </p>
        <button onClick={afegir}>Afegir</button>
      </div>
      <ul>
        {arrayNumeros.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
