import React from "react";
import CrearJugador from "../components/CrearJugador";
import s from "../modules/Admin.module.css"

export default function Admin() {
  return (
    <div className={s.div0}>
        <div className={s.divCrearjugador}>
        <h1 className={s.titulo}>Agrega Jugadores a tu base de Datos</h1>
      <CrearJugador />
        </div>
        <div className={s.divCrearMvp}>
        <h1 className={s.titulo}>Agrega Jugadores a tu base de Datos</h1>
      <CrearJugador />
        </div>
    </div>
  );
}
