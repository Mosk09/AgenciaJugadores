import React from 'react'
import {useNavigate} from "react-router-dom"
import s from "../modules/ButtonAdmin.module.css"

export default function ButtonAdmin() {
    const navigate = useNavigate("/admin")
  return (
    <div className={s.butonAdmin}>
        <button className={s.boton} onClick={()=>navigate("/admin")}>Ir a panel Admin</button>
    </div>
  )
}
