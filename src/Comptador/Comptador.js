import Display from "./Display";
import Boto from "./Boto";
import { useState } from "react";

export default function Comptador() {
  const [valor, setValor] = useState(0);
  const sumar = (quantitat) => {
    if (quantitat == null) quantitat = 1;
    setValor((n) => {
      return 10 >= n + quantitat ? n + quantitat : n;
    });
  };
  const restar = () => {
    setValor((n) => (n === 0 ? n : n - 1));
  };
  return (
    <div className="comptador-wrapper">
      <div className="clearfix"></div>
      <h2>Comptador</h2>
      <Display valor={valor} />
      <div className="container-btns">
        <Boto funcio={restar} text="-" />

        <Boto funcio={sumar} text="+" />
      </div>

      <Boto funcio={sumar} quantitat={5} text="+5" />
    </div>
  );
}
