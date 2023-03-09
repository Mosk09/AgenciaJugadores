import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJugadores } from "../redux/actions";
import Carlos from "../components/Carlos";
import Contacto from "../components/Contacto";
import Destacados from "../components/Destacados";
import Portada from "../components/Portada";

export default function Home() {
  const dispatch = useDispatch();
  const jugadores = useSelector((state) => state.jugadores);

  useEffect(() => {
    jugadores.length === 0 && dispatch(getJugadores());
  }, [dispatch, jugadores.length]);

  return (
    <div>
      <Portada />
      <Carlos />
      <Destacados />
      <Contacto />
    </div>
  );
}
