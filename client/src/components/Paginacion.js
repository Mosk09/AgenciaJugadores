import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { anterior, saltarPagina, siguiente } from '../redux/actions'
import s from "../modules/Paginacion.module.css"
export default function Paginacion() {
  const dispatch = useDispatch()
  const estado = useSelector(state=>state)
    const [paginaActual, setPaginaActual] = useState()
   const [numPagina, setNumPagina] = useState()
    useEffect(() => {
   setNumPagina(estado.cantidadPaginas)
   setPaginaActual(estado.paginaActual)
    }, [estado])

    const handleSiguiente =()=>{
      
      dispatch(siguiente()) 

    }
    const handleAnterior =()=>{
      dispatch(anterior())
    }
    const handleSaltarPagina =(e)=>{
      dispatch(saltarPagina(e))
    }
    
  return (
    <div className={s.divPaginacion}>
        <button className={s.button} onClick={()=>handleAnterior()}><i className="bi bi-arrow-left-circle"></i></button>
        {
          numPagina?.slice(1,numPagina.length)?.map((e,i)=>(
            <button className={s.button}onClick={()=>handleSaltarPagina(e+1)} key={i}>{e+1}</button>
          ))
        }
        <button className={s.button}onClick={()=>handleSiguiente()}><i className="bi bi-arrow-right-circle"></i></button>
    </div>
  )
}
