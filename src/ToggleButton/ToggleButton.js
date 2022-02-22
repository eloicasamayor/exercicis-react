import { useState } from "react";

export default function ToggleButton() {
  const [estatBoto, setEstatBoto] = useState(false);
  return (
    <div class="togglebutton-wraper">
      <h2>Toggle Button</h2>
      <button
        onClick={() => setEstatBoto((n) => !n)}
        className={estatBoto ? "btn-premut-true" : "btn-premut-false"}
      >
        Prem
      </button>
      <div>{estatBoto ? "NO PREMUT" : "PREMUT"}</div>
    </div>
  );
}
