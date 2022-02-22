import { Outlet, Link } from "react-router-dom";
import llistaExercicis from "./LlistaExercicis";
import { useState } from "react";

export default function Layout() {
  const [mostrarMenu, setMostrarMenu] = useState(true);

  return (
    <div>
      <header>
        <button
          title={mostrarMenu ? "Ocultar menú" : "Mostrar menú"}
          onClick={() => setMostrarMenu((n) => !n)}
        >
          {mostrarMenu ? "╳" : "☰"}
        </button>
        <h1>Exercicis React</h1>
        <h2>Eloi Casamayor Esteve</h2>
        {mostrarMenu && (
          <nav>
            <ul>
              {llistaExercicis.map((l, i) => (
                <li key={i}>
                  <Link to={l.path}>{l.titol}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
