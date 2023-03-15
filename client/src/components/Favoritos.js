import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritos } from "../redux/actions";
import Cards from "../components/Cards";
import s from "../modules/Jugadores.module.css";
import Paginacion from "../components/Paginacion";

export default function Favoritos() {
  const estado = useSelector((state) => state);
  const dispatch = useDispatch();

const token = localStorage.getItem("token")
  useEffect(() => {
    if(token && estado.favoritos){
      dispatch(getFavoritos(estado.usuario.id));
      // console.log(estado.usuario.id)
    }
  }, [estado.siguiente, estado.paginaActual,token,]);

  return (
    <div className={s.cont}>
      <div className={s.cont2}>
        <Paginacion />

        <div className={`container ${s.container}`}>
          {estado.favoritos.length > 0 ? (
            estado.favoritos
              .slice(estado.anterior, estado.siguiente)
              ?.map((e, i) => <Cards key={i} prop={e} />)
          ) : (
            <div>
              <h1>No hay Jugadores Favoritos</h1>
            </div>
          )}
        </div>
        <Paginacion />
      </div>
    </div>
  );
}
