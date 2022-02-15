export default function Boto({ funcio, text, quantitat }) {
  return <button onClick={() => funcio(quantitat)}>{text}</button>;
}
