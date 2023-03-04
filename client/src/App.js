import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Jugadores from "./components/Jugadores";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SubirImagen from "./components/DropZone";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jugadores" element={<Jugadores />} />
          <Route exact path="/nuevojugador" element={<SubirImagen />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
