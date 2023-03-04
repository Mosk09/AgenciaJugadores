import SubirImagen from "../components/DropZone";
import { useState, useEffect } from "react";

import s from "../modules/CrearJugador.module.css";

export default function CrearJugador() {
  const [jugador, setJugador] = useState({
    nombre: "",
    nacimiento: "",
    altura: 0,
    posicion: "",
    ultimoClub: "",
    // imagen: "",
  });
  const [file, setFile] = useState();
  const [pathImagen, setPathImagen] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setJugador({ ...jugador, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleImagen = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  useEffect(() => {}, []);

  return (
    <div className={`container  text-light ${s.bordeForm} `}>
      <div
        className={`container  d-flex flex-md-row gap-5 flex-sm-column flex-column justify-content-center ${s.borde1Form} `}
      >
        <div className={`  ${s.containerForm}`}>
          <div className="">
            <h3 className="">Agrega tu Nuevo Jugador</h3>
            <p className="">Suma tu nuevo jugador a tu base de datos</p>
            <img className={s.imgForm} src="/jord.png" />
          </div>
        </div>
        <div className=" ">
          <form onSubmit={handleSubmit} className="col-12">
            <div className="">
              <label htmlFor="nombre" className="form-label">
                Nombre y Apellido
              </label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                value={jugador.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="nacimiento" className="form-label">
                Nacimiento
              </label>
              <input
                type="date"
                name="nacimiento"
                className="form-control"
                value={jugador.nacimiento}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="altura" className="form-label">
                Altura
              </label>
              <input
                type="number"
                step=".1"
                name="altura"
                className="form-control"
                value={jugador.altura}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <label htmlFor="posicion" className="form-label">
                Posicion
              </label>

              <select
                name="posicion"
                className="form-select"
                aria-label="Default select example"
                value={jugador.posicion}
                onChange={handleChange}
              >
                <option value="">Posicion</option>
                <option value="Base">Base</option>
                <option value="Escolta">Escolta</option>
                <option value="Alero">Alero</option>
                <option value="Ala Pivot">Ala Pivot</option>
                <option value="Pivot">Pivot</option>
              </select>
            </div>

            <div className="">
              <label htmlFor="ultimoClub" className="form-label">
                ultimoClub
              </label>
              <input
                type="text"
                name="ultimoClub"
                className="form-control"
                value={jugador.ultimoClub}
                onChange={handleChange}
              />
            </div>

            <div className="">
              <SubirImagen />
              {/* <label htmlFor="imagen" className="form-label">
                Imagen
              </label>
              <input
                type="text"
                name="imagen"
                className="form-control"
                // value={jugador.imagen}
                placeholder="subi imagen"
                onChange={handleImagen}
              /> */}
              {/* <img src={pathImagen} alt="image" width="150px"/> */}

              <div className="">
                <button className={`btn btn m-2 ${s.botForm}`}>Crear</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
