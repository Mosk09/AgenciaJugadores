import React, { useState } from "react";
import s from "../modules/Cards.module.css";

export default function CardsDestacadas({ prop }) {
  const [fav, setFav] = useState(false);
  const handleFav = () => {
    fav ? setFav(false) : setFav(true);
  };
  return (
    <div className={s.card}>
      <img className={s.img} alt="foto" src={prop.imagen[0].url} />
      <div className={s.cardBody}>
        <h3 className={s.nombre}>{prop.nombre}</h3>
        <div className={s.divEstad}>
          <span className={s.span}>Puntos- {prop.puntos}</span>
          <span className={s.span}>Val- {prop.val}</span>
        </div>
        <div className={s.divEstad}>
          <span className={s.span}>Asist- {prop.asist}</span>
          <span className={s.span}>Reb- {prop.reb}</span>
        </div>
      </div>
      {/* <button className={s.buttonFav} onClick={handleFav}>
        {fav ? (
          <i className={`bi bi-heart-fill ${s.icon}`}></i>
        ) : (
          <i className={`bi bi-heart ${s.icon}`}></i>
        )}
      </button> */}
    </div>
  );
}
