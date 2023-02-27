import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filtroEdad, filtroLibre, filtroPosision, limpiarFiltros } from '../redux/actions'
import s from "../modules/Filtros.module.css"
export default function Filtros() {
    const estado = useSelector(state=>state)
    const dispatch = useDispatch()

    useEffect(() => {
      
    }, [estado.filtroJugadores])


    const handleFiltroPosicion =(e)=>{
        dispatch(filtroPosision(e.target.value))
       
    }
    const handleFiltroEdad =(e)=>{
        dispatch(filtroEdad(e.target.value))
      
    }
    const handleFiltroLibre =(e)=>{
        dispatch(filtroLibre(e.target.value))      
    }
    const handleLimpiarFiltro =()=>{
        document.getElementById("Posicion").value = "Posicion"
        document.getElementById("Categoria").value = "Categoria"
        document.getElementById("Disponibilidad").value = "Disponibilidad"
        dispatch(limpiarFiltros())      
    }

  return (
    <div className={s.divContenedor}>
        <select className={s.select}id='Posicion' onChange={handleFiltroPosicion}>
            <option >Posicion</option>
            <option value="base">Base</option>
            <option value="escolta">Escolta</option>
            <option value="alero">Alero</option>
            <option value="ala pivot">Ala Pivot</option>
            <option value="pivot">Pivot</option>
        </select>
        <select className={s.select}id='Categoria' onChange={handleFiltroEdad}>
            <option >Categoria</option>
            <option value={2004} >Sub 19</option>
            <option value={2002}>Sub 21</option>
            <option value={2000}>Sub 23</option>
            <option value={1999}>Mayor</option>
        </select>
        <select className={s.select}id='Disponibilidad' onChange={handleFiltroLibre}>
            <option >Disponibilidad</option>
            <option value={true} >Libres</option>
            <option value={false}>Contratados</option>    
        </select>
        <button className={s.button}onClick={handleLimpiarFiltro}>Limpiar filtro</button>
    </div>
  )
}
