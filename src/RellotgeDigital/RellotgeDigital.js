import { useState } from "react";

export default function RellotgeDigital() {
  const [data, setData] = useState(new Date());
  const [veureData, setVeureData] = useState(false);

  const actualitzarData = () => {
    setData(new Date());
  };
  const toggleVeureData = () => {
    setVeureData((n) => !n);
  };

  setInterval(actualitzarData, 1000);
  return (
    <div className="wrapper-rellotge-digital">
      <h2>Rellotge Digital</h2>

      <p className="hora">{data.toISOString().slice(11, 19)}</p>
      <p className={"rellotge-digital-data" + (veureData ? "" : " hidden")}>
        {data.toISOString().slice(0, 10)}
      </p>
      <label>
        <input
          type="checkbox"
          id="cbox1"
          value="first_checkbox"
          onChange={toggleVeureData}
        />{" "}
        Veure data
      </label>
    </div>
  );
}
