export default function Arrays1() {
  let llista = new Array(9);
  return (
    <>
      <h1>Arrays 1</h1>
      <p>Quants valors vols?</p>
      <select>
        {llista.map((v, i) => (
          <option>{i}</option>
        ))}
      </select>
    </>
  );
}
