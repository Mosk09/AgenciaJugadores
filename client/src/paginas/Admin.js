import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CrearDestacado from "../components/CrearDestacado";
import CrearJugador from "../components/CrearJugador";
import s from "../modules/Admin.module.css";
import { ContratadoLibreJugador, deleteDestacado, deleteJugadores, getDestacados, getJugadores } from "../redux/actions";
import swal from 'sweetalert';


export default function Admin() {
  const [crear, setCrear] = useState(true);
  const [jugador, setJugador] = useState([]);
  const [destacado, setDestacado] = useState([]);
  const { jugadores,destacados } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJugadores());
    dispatch(getDestacados());
    setJugador(jugadores);
    setDestacado(destacados);
  }, [dispatch, jugadores.length, jugador.length, destacados.length,destacado.length]);

  const handleChange = () => {
    setCrear(!crear);
  };
  const handleLibre = (e) => {
    dispatch(ContratadoLibreJugador(e));
    dispatch(getJugadores());
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
  const handleDeleteDestacado = async (id) => {
    const willDelete = await swal({
      title: "Estas seguro?",
      text: "Estas seguro de eliminar el jugador?",
      icon: "warning",
      dangerMode: true,
      buttons:["No", "Si"]      
    });     
    if (willDelete) {
      await dispatch(deleteDestacado(id));
      await dispatch(getDestacados());
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
        <h1 className={s.titleTable}>Jugadores</h1>
      <div className={s.div0}>
        <table className={s.table}>
          <thead>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Club</th>
            <th>Posicion</th>
            <th>Nacimiento</th>
            {/* <th>Modificar</th> */}
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
                    <button className={s.boton} onClick={()=>handleLibre({"id":e.id, "libre":!e.libre})}>{e.libre?<p>Libre</p>:<p>Contratado</p>}</button>
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
      <h1 className={s.titleTable}>Destacados</h1>
      <div className={s.div0}>
        <table className={s.table}>
          <thead>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Puntos</th>
            <th>Asistencias</th>            
            <th>Rebotes</th>            
            <th>Valoracion</th>            
            <th>Eliminar</th>
          </thead>
          <tbody>
            {destacados &&
              destacados?.map((e, i) => (
                <tr key={i}>
                  <td>
                    <img className={s.img} src={e.imagen[0].url} alt="foto" />
                  </td>
                  <td>{e.nombre}</td>
                  <td>{e.puntos}</td>
                  <td>{e.asist}</td>
                  <td>{e.reb}</td>           
                  <td>{e.val}</td>           
                  <td>
                    <button
                      className={s.botonClose}
                      onClick={() => handleDeleteDestacado(e.id)}
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
