import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../modules/Cards.module.css";
import { addFavoritos, removeFavoritos } from "../redux/actions";

export default function Cards({ prop }) {
  const dispatch = useDispatch();
const usuario = useSelector(state=>state.usuario)
  const [fav, setFav] = useState(false);
  const [favorito, setFavorito] = useState();
  
  useEffect(() => {
   usuario && setFavorito({id:usuario.id, idJugador:prop.id})
  }, [usuario, prop.id])
  
  const handleFav = () => {
    if(fav){
      setFav(!fav);}
    // dispatch(removeFavoritos)  
    // }
    if(!fav){
      setFav(!fav);
      favorito && dispatch(addFavoritos(favorito))  
      
    }
  };
  return (
    <div className={s.card}>
      <img className={s.img} src={prop.imagen[0].url} alt="Foto"/>
      <div className={s.cardBody}>
        <h3 className={s.nombre}>{prop.nombre.toUpperCase()}</h3>
        <div className={s.divEstad}>
          <span className={s.span}>
            <i className="bi bi-check2-circle"> </i>
            {prop.posicion}
          </span>
          <span className={s.span}>
            <i className="bi bi-check2-circle"> </i>
            {prop.nacimiento.slice(0, 7)}
          </span>
        </div>
        <div className={s.divEstad}>
          <span className={s.span}>
            <i className="bi bi-check2-circle"> </i>
            {prop.altura} M
          </span>
          <span className={s.span}>
            <i className="bi bi-check2-circle"> </i>
            {prop.clubes}
          </span>
        </div>
      </div>
      <button className={s.buttonFav} onClick={()=>handleFav()}>
        {fav ? (
          <i className={`bi bi-heart-fill ${s.icon}`}></i>
        ) : (
          <i className={`bi bi-heart ${s.icon}`}></i>
        )}
      </button>
      <div className={prop.libre ? s.bandaLateral : s.bandalateralFalse}></div>
    </div>
  );
}
