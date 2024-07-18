import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH } from "./constant";
import Container from "./Layouts/Container";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Proejcts";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Container />}>
          <Route path={HOME_PATH()} element={<Home />} />
          <Route path={ABOUT_PATH()} element={<About />} />
          <Route path={PROJECTS_PATH()} element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
