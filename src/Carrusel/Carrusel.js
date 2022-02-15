import { useState } from "react";

export default function Carrusel() {
  const [imatgeActual, setImatgeActual] = useState(0);
  const enrere = () => {
    if (imatgeActual > 0) {
      setImatgeActual((n) => n - 1);
    }
  };
  const endavant = () => {
    if (imatgeActual < imatges.length - 1) {
      setImatgeActual((n) => n + 1);
    }
  };
  const seleccionarImatge = (n) => {
    setImatgeActual(n);
  };
  let imatges = [
    "https://picsum.photos/200",
    "https://picsum.photos/300",
    "https://picsum.photos/400",
    "https://picsum.photos/500",
    "https://picsum.photos/600",
    "https://picsum.photos/700",
    "https://picsum.photos/200",
    "https://picsum.photos/300",
    "https://picsum.photos/400",
  ];
  return (
    <div className="wrapper-carrusel">
      <h2>Carrusel</h2>
      <div className="body-carrusel">
        <button className="navegar-carrusel enrere" onClick={() => enrere()}>
          {"<"}
        </button>
        <div>
          <img
            src={imatges[imatgeActual]}
            alt={"imatge bonica" + imatgeActual}
          />
          <div className="navegacio-imatges-carrusel">
            {imatges.map((i, n) => {
              return (
                <button
                  className={
                    imatgeActual === n ? "btn-foto-actual" : "btn-foto"
                  }
                  key={n}
                  onClick={() => seleccionarImatge(n)}
                >
                  {n}
                </button>
              );
            })}
          </div>
        </div>

        <button
          className="navegar-carrusel endavant"
          onClick={() => endavant()}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
