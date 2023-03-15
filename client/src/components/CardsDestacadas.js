import React, { useState } from "react";
import s from "../modules/Cards.module.css";

export default function CardsDestacadas({prop}) {
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
        alt="foto"
        src="https://media.istockphoto.com/id/514027839/es/foto/hombre-africano-salto-tirando-silueta-jugador-de-baloncesto.jpg?s=612x612&w=0&k=20&c=3hgaKH8DXO9d7WxJ9IvLogZrHJhhT0BzsdgLjKW8uqA="
      />
      <div className={s.cardBody}>
        <h3 className={s.nombre}>{prop.nombre}</h3>
        <div className={s.divEstad}>
          <span className={s.span}>30 Puntos</span>
          <span className={s.span}>Asist</span>
        </div>
        <div className={s.divEstad}>
          <span className={s.span}>25 Val</span>
          <span className={s.span}>12 Reb</span>
        </div>
      </div>
      <button className={s.buttonFav} onClick={handleFav}>
        {fav ? (
          <i className={`bi bi-heart-fill ${s.icon}`}></i>
        ) : (
          <i className={`bi bi-heart ${s.icon}`}></i>
        )}
      </button>
    </div>
  );
}
