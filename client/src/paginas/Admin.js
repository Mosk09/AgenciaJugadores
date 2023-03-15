import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CrearDestacado from "../components/CrearDestacado";
import CrearJugador from "../components/CrearJugador";
import s from "../modules/Admin.module.css";

export default function Admin() {
  const [crear, setCrear] = useState(true);
  const estado = useSelector((state) => state);

  useEffect(() => {
   
  }, [estado]);

  const handleChange = () => {
    setCrear(!crear);
  };
  return (
    <>
      <div className={s.div0}>
        <div className={s.divbutton}>
          <h4 className={s.titulo}>Manten tu pagina en movimiento</h4>
          {!crear ? (
            <button onClick={handleChange} className={s.buton}>
              Agregar Jugador
            </button>
          ) : (
            <button onClick={handleChange} className={s.buton}>
              Agregar Destacado
            </button>
          )}
        </div>
        {crear ? (
          <div className={s.divCrearjugador}>
            <h3 className={s.titulo}>Agrega Jugadores a tu base de Datos</h3>
            <CrearJugador />
          </div>
        ) : (
          <div className={s.divCrearjugador}>
            <h3 className={s.titulo}>Agrega Jugadores Destacados</h3>
            <CrearDestacado />
          </div>
        )}
      </div>
      <div className={s.div0}>
        <table className={s.table}>
          <thead>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Club</th>
            <th>Posicion</th>
            <th>Nacimiento</th>
            <th>Modificar</th>
            <th>Libre</th>
            <th>Eliminar</th>
          </thead>
          <tbody >
          {estado.jugadores?.map((e, i) => (
            <tr key={i} >
              <td >
                <img className={s.img} src={e.imagen[0].url} alt="foto"/>
              </td>
              <td >{e.nombre}</td>
              <td >{e.clubes}</td>
              <td >{e.posicion}</td>
              <td >{e.nacimiento}</td>
              <td ><button>Up</button></td>
              <td ><button>Libre</button></td>
              <td ><button>X</button></td>
            </tr>
              ))}
              </tbody>
        </table>
      </div>
    </>
  );
}
