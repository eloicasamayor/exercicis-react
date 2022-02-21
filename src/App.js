import "./App.css";
import llistaExercicis from "./LlistaExercicis";
import Home from "./Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {llistaExercicis.map((item, i) => (
            <Route path={item.path} element={item.exercici} key={i} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
