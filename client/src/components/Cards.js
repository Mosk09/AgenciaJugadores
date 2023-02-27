import React, { useState } from "react";
import s from "../modules/Cards.module.css";

export default function Cards({prop}) {
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    fav?
    setFav(false):
    setFav(true)
  };
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={prop.imagen}
      />
      <div className={s.cardBody}>
        <h3 className={s.nombre}>{prop.nombre.toUpperCase()}</h3>
        <div className={s.divEstad}>
          <span className={s.span}><i className="bi bi-check2-circle"> </i>{prop.posicion}</span>
          <span className={s.span}><i className="bi bi-check2-circle"> </i>{prop.nacimiento.slice(0,7)}</span>
        </div>
        <div className={s.divEstad}>
          <span className={s.span}><i className="bi bi-check2-circle"> </i>{prop.altura} Metros</span>
          <span className={s.span}><i className="bi bi-check2-circle"> </i>{prop.clubes}</span>
        </div>
      </div>
      <button className={s.buttonFav} onClick={handleFav}>
        {fav ? (
          <i className={`bi bi-heart-fill ${s.icon}`}></i>
        ) : (
          <i className={`bi bi-heart ${s.icon}`}></i>
        )}
      </button>
      <div className={prop.libre?s.bandaLateral:s.bandalateralFalse}></div>
    </div>
  );
}
