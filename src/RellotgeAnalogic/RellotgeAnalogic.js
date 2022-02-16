import { useState } from "react";
export default function RellotgeAnalogic() {
  const [data, setData] = useState(new Date());
  const actualitzarData = () => {
    setData(new Date());
  };
  setInterval(actualitzarData, 1000);

  return (
    <div>
      <h2>Rellotge Analògic</h2>
      <div className="rellotge-analogic">
        <div
          id="agulla-segons"
          style={{
            transform: `rotate(${
              parseInt(data.toISOString().slice(17, 19)) * 6
            }deg)`,
          }}
        ></div>
        <div
          id="agulla-minuts"
          style={{
            transform: `rotate(${
              parseInt(data.toISOString().slice(14, 16)) * 6
            }deg)`,
          }}
        ></div>
        <div
          id="agulla-hores"
          style={{
            transform: `rotate(${
              24 - parseInt(data.toISOString().slice(11, 13)) * 6
            }deg)`,
          }}
        ></div>
        <p>{parseInt(data.toISOString().slice(17, 19))}</p>
        <p>{parseInt(data.toISOString().slice(14, 16))}</p>
        <p>{24 - parseInt(data.toISOString().slice(11, 13))}</p>
      </div>
    </div>
  );
}
