import React from "react";
import s from "../../src/modules/Contacto.module.css";

export default function Contacto() {
  return (
    <div className={`container ${s.container}`} id="contacto">
      <div>
        <img className={s.logoLiga}src="/logoLigas/liga.png"/>
        <img className={s.logoLiga}src="/logoLigas/tna.png"/>
        <img className={s.logoLiga}src="/logoLigas/federal.png"/>
        <img className={s.logoLiga}src="/logoLigas/ligafem.png"/>
        <img className={s.logoLiga}src="/logoLigas/fedfemenino.png"/>
      </div>
      {/* <div className="d-flex-column"> */}
      <div className={s.divTitle}>
        <span className={s.title}>CONTACTANOS</span>
      </div>
      <div className={s.row}>
        <img className={s.img} src="/man-gac7f708dc_1280.jpg" />

        <div className={`${s.divContactoInput}`}>
          <label className={s.labelEmail}>Email</label>
          <input className={s.inputEmail} type="email"></input>
          <label className={s.labelEmail}>Mensaje</label>
          <textarea className={s.inputMensaje}></textarea>
          <button className={s.button}>Enviar</button>
        </div>
      </div>
      </div>
    // </div>
  );
}
