export default function Imatge({ src, funcio, posicio, classe }) {
  return <img src={src} onClick={() => funcio(posicio)} className={classe} />;
}
