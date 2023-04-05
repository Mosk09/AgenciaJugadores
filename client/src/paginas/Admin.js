import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrearDestacado from "../components/CrearDestacado";
import CrearJugador from "../components/CrearJugador";
import s from "../modules/Admin.module.css";
import { deleteJugadores, getJugadores } from "../redux/actions";
import swal from 'sweetalert';


export default function Admin() {
  const [crear, setCrear] = useState(true);
  const [jugador, setJugador] = useState([]);
  const { jugadores } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJugadores());
    setJugador(jugadores);
  }, [dispatch, jugadores.length, jugador.length]);

  const handleChange = () => {
    setCrear(!crear);
  };
  const handleDeleteJugador = async (id) => {
    const willDelete = await swal({
      title: "Estas seguro?",
      text: "Estas seguro de eliminar el jugador?",
      icon: "warning",
      dangerMode: true,
      buttons:["No", "Si"]      
    });     
    if (willDelete) {
      await dispatch(deleteJugadores(id));
      await dispatch(getJugadores());
      swal("Borrado!", "Jugador Borrado!", "success");
    }
  };
  return (
    <>
      <div className={s.div0}>
        <div className={s.divbutton}>
          <h4 className={s.titulo}>Manten tu pagina en movimiento</h4>
          {!crear ? (
            <button onClick={handleChange} className={s.boton}>
              Agregar Jugador
            </button>
          ) : (
            <button onClick={handleChange} className={s.boton}>
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
          <tbody>
            {jugador &&
              jugador?.map((e, i) => (
                <tr key={i}>
                  <td>
                    <img className={s.img} src={e.imagen[0].url} alt="foto" />
                  </td>
                  <td>{e.nombre}</td>
                  <td>{e.clubes}</td>
                  <td>{e.posicion}</td>
                  <td>{e.nacimiento}</td>
                  <td>
                    <button className={s.boton}>Up</button>
                  </td>
                  <td>
                    <button className={s.boton}>Libre</button>
                  </td>
                  <td>
                    <button
                      className={s.botonClose}
                      onClick={() => handleDeleteJugador(e.id)}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
