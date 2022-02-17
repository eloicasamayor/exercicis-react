import { useState, useEffect } from "react";
export default function RellotgeAnalogic() {
  const [data, setData] = useState(new Date());
  const actualitzarData = () => {
    setData(new Date());
  };
  useEffect(() => {
    setInterval(actualitzarData, 1000);
  }, []);

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
        <div className="num-hora" id="hora-3">
          3
        </div>
        <div className="num-hora" id="hora-6">
          6
        </div>
        <div className="num-hora" id="hora-9">
          9
        </div>
        <div className="num-hora" id="hora-12">
          12
        </div>
      </div>
    </div>
  );
}
