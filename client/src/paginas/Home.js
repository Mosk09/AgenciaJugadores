import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJugadores } from "../redux/actions";
import Carlos from "../components/Carlos";
import Contacto from "../components/Contacto";
import Destacados from "../components/Destacados";
import Portada from "../components/Portada";
import ButtonAdmin from "../components/ButtonAdmin";

export default function Home() {
  const dispatch = useDispatch();
  const jugadores = useSelector((state) => state.jugadores);
const admin = localStorage.getItem("admin")
  useEffect(() => {
    jugadores.length === 0 && dispatch(getJugadores());
  }, [dispatch, jugadores.length, admin]);

  return (
    <div>
      {
        admin && 
      <ButtonAdmin/>
      }
      <Portada />
      <Carlos />
      <Destacados />
      <Contacto />
    </div>
  );
}
