import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getJugadores } from '../redux/actions'
import Carlos from './Carlos'
import Contacto from './Contacto'
import Destacados from './Destacados'
import Footer from './Footer'
import NavBar from './NavBar'
import Portada from './Portada'

export default function Home() {
  const dispatch = useDispatch()
    const jugadores = useSelector((state)=>state.jugadores)

    useEffect(()=>{
      jugadores.length===0 && dispatch(getJugadores())  

    },[dispatch, jugadores.length])


  return (
    <div>
 
      <Portada/>
      <Carlos/>
      <Destacados/>
      <Contacto/>
  
    </div>
  )
}
