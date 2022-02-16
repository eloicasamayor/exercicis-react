import { useState, useEffect } from "react";
export default function TresEnRatlla() {
  let taulerB = [];
  const [jocAcabat, setJocAcabat] = useState(false);
  const [torn, setTorn] = useState(true);
  const [tauler, setTauler] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);

  useEffect(() => {
    setJocAcabat(!tauler.includes("-"));
  }, [tauler]);

  const Clicar = (i) => {
    console.log(i);
    taulerB = [...tauler];
    taulerB[i] = torn ? 1 : 0;
    console.log(taulerB);
    setTauler(taulerB);
    setTorn((n) => !n);

    /* No funciona, s'ha de fer en el useEffect perquè comprobi després de canviar tauler
    setJocAcabat(!tauler.includes("-"));
    */
  };
  const Reset = () => {
    setTauler(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    setTorn(true);
    setJocAcabat(false);
  };
  return (
    <div className="wrapper-tres-en-ratlla">
      <h2>Tres en Ratlla</h2>
      <h3>{"torn:" + (torn ? 1 : 0)}</h3>
      <div className="tauler-tres-en-ratlla">
        {tauler.map((e, i) => (
          <button key={i} className="btn-tauler" onClick={() => Clicar(i)}>
            {tauler[i]}
          </button>
        ))}
      </div>
      <button
        className={"btn-reset" + (jocAcabat ? "" : "-hidden")}
        onClick={Reset}
      >
        Reset
      </button>
    </div>
  );
}
