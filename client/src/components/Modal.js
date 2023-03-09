import React, { useState } from 'react'
import s from "../modules/Modal.module.css"
import Login from './Login'
import Register from './Registro'

export default function Modal({children, modal, setModal}) {
  const [login, setLogin] = useState(true)
  return (
    <>
    { modal && 
    <div className={s.fondoModal}>
        <div className={s.modal}>
          {
            login ?
            <Login login={login} setLogin={setLogin} setModal={setModal} modal={modal}/>: 
            <Register login={login} setLogin={setLogin}setModal={setModal} modal={modal}/>
          }
        <button className={s.botoncerrar} onClick={()=>setModal(!modal)}>X</button>
        </div>
    </div>

    }
    </>
  )
}
