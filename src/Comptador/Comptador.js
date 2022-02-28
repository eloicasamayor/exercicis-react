import Display from "./Display";
import { counter, increment, reset, toggleLimitador } from "./counter";

import { useReducer } from "react";

export default function Comptador() {
  const [state, dispatch] = useReducer(counter, { valor: 0, limitador: false });

  return (
    <div className="comptador-wrapper">
      <div className="clearfix"></div>
      <h2>Comptador</h2>
      <Display valor={state.valor} />
      <div className="container-btns">
        <button onClick={() => dispatch(increment(-1))}>-</button>

        <button onClick={() => dispatch(increment(+1))}>+</button>
      </div>
      <div className="container-btns">
        <button onClick={() => dispatch(increment(+5))}>+5</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <input
        type="checkbox"
        onChange={() => dispatch(toggleLimitador())}
        value={state.limitador}
      />
      <label>Limitar comptador (0, 10)</label>
    </div>
  );
}
