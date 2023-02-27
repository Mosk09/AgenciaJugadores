import React from 'react'
import s from "../modules/Carlos.module.css";
export default function Carlos() {
  return (
    <div className={`container ${s.divCarlos0}`}>

    <div className={s.divCarlos}>
        <img className={s.img} src="/istockphoto-481864562-612x612.jpg"/>
        <div className={s.divtexto}>
            Mi nombre es Carlos Calvi soy representante de jugadores de basket.
             Llevo mas de 15 años en este rubro y mas de 100 jugadores a nivel pais que confian en mi.
             Si queres trabajar conmigo, no dudes en contactarte
        </div>
    </div>
    </div>
  )
}
