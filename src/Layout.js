import { Outlet, Link } from "react-router-dom";
import llistaExercicis from "./LlistaExercicis";

export default function Layout() {
  return (
    <div>
      <header>
        <h1>Exercicis React</h1>
        <h2>Eloi Casamayor Esteve</h2>
      </header>

      <nav>
        <ul>
          {llistaExercicis.map((l, i) => (
            <li key={i}>
              <Link to={l.path}>{l.titol}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
