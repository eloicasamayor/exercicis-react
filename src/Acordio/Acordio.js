import { useState } from "react";
export default function Acordio() {
  const [titolSeleccionat, setTitolSeleccionat] = useState(null);
  let textos = [
    {
      titol: "Titol 1",
      contingut:
        "In id metus quis lorem fermentum rhoncus. Pellentesque et est finibus, fermentum metus sit amet, sagittis ante. Morbi bibendum finibus tellus, sit amet molestie turpis malesuada non. Nam venenatis tristique blandit. Aliquam dolor metus, fringilla sed tristique nec, porttitor nec lacus. In malesuada rutrum ultrices. Vestibulum vehicula urna in nunc hendrerit, ut aliquam neque hendrerit.",
    },
    {
      titol: "Titol 2",
      contingut:
        "In id metus quis lorem fermentum rhoncus. Pellentesque et est finibus, fermentum metus sit amet, sagittis ante. Morbi bibendum finibus tellus, sit amet molestie turpis malesuada non. Nam venenatis tristique blandit. Aliquam dolor metus, fringilla sed tristique nec, porttitor nec lacus. In malesuada rutrum ultrices. Vestibulum vehicula urna in nunc hendrerit, ut aliquam neque hendrerit.",
    },
    {
      titol: "Titol 3",
      contingut:
        "In id metus quis lorem fermentum rhoncus. Pellentesque et est finibus, fermentum metus sit amet, sagittis ante. Morbi bibendum finibus tellus, sit amet molestie turpis malesuada non. Nam venenatis tristique blandit. Aliquam dolor metus, fringilla sed tristique nec, porttitor nec lacus. In malesuada rutrum ultrices. Vestibulum vehicula urna in nunc hendrerit, ut aliquam neque hendrerit.",
    },
    {
      titol: "Titol 4",
      contingut:
        "In id metus quis lorem fermentum rhoncus. Pellentesque et est finibus, fermentum metus sit amet, sagittis ante. Morbi bibendum finibus tellus, sit amet molestie turpis malesuada non. Nam venenatis tristique blandit. Aliquam dolor metus, fringilla sed tristique nec, porttitor nec lacus. In malesuada rutrum ultrices. Vestibulum vehicula urna in nunc hendrerit, ut aliquam neque hendrerit.",
    },
    {
      titol: "Titol 5",
      contingut:
        "In id metus quis lorem fermentum rhoncus. Pellentesque et est finibus, fermentum metus sit amet, sagittis ante. Morbi bibendum finibus tellus, sit amet molestie turpis malesuada non. Nam venenatis tristique blandit. Aliquam dolor metus, fringilla sed tristique nec, porttitor nec lacus. In malesuada rutrum ultrices. Vestibulum vehicula urna in nunc hendrerit, ut aliquam neque hendrerit.",
    },
  ];
  const seleccionarText = (n) => {
    setTitolSeleccionat((titolSeleccionatAnterior) =>
      titolSeleccionatAnterior === n ? null : n
    );
  };
  return (
    <div className="acordio-wrapper">
      <h2>Acordi??</h2>
      {textos.map((t, i) => {
        return (
          <div
            className={
              titolSeleccionat !== i
                ? "element-acordio"
                : "element-acordio-seleccionat"
            }
            key={i}
            onClick={() => seleccionarText(i)}
          >
            <h3>{t.titol}</h3>
            <p
              className={
                titolSeleccionat !== i ? "contingut" : "contingut-invisible"
              }
            >
              {t.contingut}
            </p>
          </div>
        );
      })}
    </div>
  );
}
