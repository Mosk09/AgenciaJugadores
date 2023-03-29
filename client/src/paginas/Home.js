import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getJugadores } from "../redux/actions";
import Carlos from "../components/Carlos";
import Contacto from "../components/Contacto";
import Destacados from "../components/Destacados";
import Portada from "../components/Portada";
import ButtonAdmin from "../components/ButtonAdmin";

export default function Home() {
  const dispatch = useDispatch();
  const { jugadores, usuario } = useSelector((state) => state);
  const [admin, setAdmin] = useState(localStorage.getItem("admin"));

  useEffect(() => {
    jugadores.length === 0 && dispatch(getJugadores());
  }, [dispatch, jugadores.length, usuario.admin, admin]);

  useEffect(() => {
  setAdmin(localStorage.getItem("admin"))
  !localStorage.getItem("admin") && setAdmin("false")
  }, [admin,localStorage.getItem("admin")]);

  return (
    <div>
      {usuario.admin || admin === "true" ? <ButtonAdmin /> : null}
      <Portada />
      <Carlos />
      <Destacados />
      <Contacto />
    </div>
  );
}
