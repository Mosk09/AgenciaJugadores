import React from "react";
import s from "../../src/modules/Portada.module.css";

export default function Portada() {
  return (
    <div className={`container ${s.containerGral}`}>
      <div className={`col-md-7 ${s.contenedorTitulos}`}>
        <span className={s.titulo}>Calvi Pro Basket</span>
        <h5 className={s.subTitulo}>Agente Deportivo</h5>
      </div>
    </div>
  );
}
