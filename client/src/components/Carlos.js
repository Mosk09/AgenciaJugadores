import React from 'react'
import s from "../modules/Carlos.module.css";
export default function Carlos() {
  return (
    <div className={`container ${s.divCarlos0}`}>

    <div className={s.divCarlos}>
      <div className={s.divImg}>
        <img className={s.img} alt="foto"src="/calvi1.png"/>
      </div>
        <div className={s.divtexto}>
            Mi nombre es Carlos Calvi soy representante de jugadores de basket.
             Llevo mas de 15 años en este rubro y mas de 100 jugadores a nivel pais que confian en mi.
             
        </div>
    </div>
    </div>
  )
}
