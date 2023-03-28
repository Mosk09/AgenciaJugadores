import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritos, getJugadores } from "../redux/actions";
import Cards from "../components/Cards";
import s from "../modules/Jugadores.module.css";
import Paginacion from "../components/Paginacion";
import Filtros from "../components/Filtros";
import Buscador from "../components/Buscador";
export default function Jugadores() {
  const estado = useSelector((state) => state);
  const dispatch = useDispatch();
  const jugadores = useSelector((state) => state.jugadores);
  const id = localStorage.getItem("id")

  useEffect(() => {
    id && dispatch(getFavoritos(id))
    jugadores.length === 0 && dispatch(getJugadores());
  }, [estado.siguiente, estado.paginaActual]);

  return (
    <div className={s.cont}>
      <Filtros />
      <div className={s.cont2}>
      <Paginacion />
        <Buscador/>
      <div className={`container ${s.container}`}>
        {estado.filtroJugadores.length > 0
          ? estado.filtroJugadores
          .slice(estado.anterior, estado.siguiente)
          ?.map((e, i) => <Cards key={i} prop={e} />)
          : jugadores
          ?.slice(estado.anterior, estado.siguiente)
          ?.map((e, i) => <Cards key={i} prop={e} />)}
      </div>
      <Paginacion />
          </div>
    </div>
  );
}
