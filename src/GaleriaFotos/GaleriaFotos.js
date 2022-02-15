import Imatge from "./Imatge";
import { useState } from "react";

export default function GaleriaFotos() {
  const [imatgeGran, setImatgeGran] = useState(null);
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
  const veureFotoGran = (pos) => {
    setImatgeGran(pos === imatgeGran ? null : pos);
  };

  return (
    <div>
      <h2>Galeria de Fotos</h2>
      <div className="wrapper-galeria">
        {imatges.map((p, i) => (
          <Imatge
            key={i}
            src={p}
            funcio={veureFotoGran}
            posicio={i}
            classe={i === imatgeGran ? "imatge-gran" : ""}
          />
        ))}
      </div>
    </div>
  );
}
