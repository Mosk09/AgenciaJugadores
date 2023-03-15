import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Jugadores from "./paginas/Jugadores";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Modal from "./components/Modal";
import { useState } from "react";
import Favoritos from "./components/Favoritos";
import Admin from "./paginas/Admin";


function App() {
  const [modal, setModal] = useState(false)
  return (
    <div className="App">
      <Router>
        <Modal modal={modal} setModal={setModal}/>
        <NavBar setModal={setModal}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jugadores" element={<Jugadores />} />
          <Route exact path="/favoritos" element={<Favoritos />} />
          <Route exact path="/admin" element={<Admin />} />
          {/* <Route exact path="/login" element={<ModalLogin />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
