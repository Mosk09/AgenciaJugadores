import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Jugadores from "./paginas/Jugadores";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import CrearJugador from "./paginas/CrearJugador";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jugadores" element={<Jugadores />} />
          <Route exact path="/nuevojugador" element={<CrearJugador />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
