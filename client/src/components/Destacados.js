import React from "react";
import CardsDestacadas from "./CardsDestacadas";
import s from "../modules/Destacados.module.css";

export default function Destacados() {
  let prop = { nombre: "Leo Mosconi" };
  return (
    <div className={`container ${s.container}`}>
        <div className={s.divTitle}>
      <span className={s.title}>DESTACADOS DE LA SEMANA</span>
        </div>
      <div className={`col-10 ${s.divCards}`}>
        <CardsDestacadas prop={prop} />
        <CardsDestacadas prop={prop} />
        <CardsDestacadas prop={prop} />
        <CardsDestacadas prop={prop} />
        <CardsDestacadas prop={prop} />
        <CardsDestacadas prop={prop} />
      </div>
    </div>
  );
}
