import axios from 'axios';


export function getJugadores () {

    return async function(dispatch){
    const res = await axios.get("http://localhost:3001/jugador");
      return dispatch({
        type: "GET_JUGADORES",
        payload: res.data
      })
    }
}
//-------------------------------------PAGINACION---------------------------------
export function siguiente () {
  return  function(dispatch){ 
    return dispatch({
      type:"SIGUIENTE",
    })
  }
}
export function anterior () {

  return function(dispatch){
    return dispatch({
      type: "ANTERIOR",
    })
  }
}
export function saltarPagina (num) {
  return function(dispatch){
    return dispatch({
      type: "SALTAR_PAGINA",
      payload:num
    })
  }
} 

//-------------------------------------FILTROS---------------------------------------

export function filtroPosision (posicion) {
  return function(dispatch){
    return dispatch({
      type: "FILTRO_POSICION",
      payload:posicion
    })
  }
}
export function filtroEdad (edad) {
  return function(dispatch){
    return dispatch({
      type: "FILTRO_EDAD",
      payload:edad
    })
  }
}
export function filtroLibre (libre) {
  return function(dispatch){
    return dispatch({
      type: "FILTRO_LIBRE",
      payload:libre
    })
  }
}
export function limpiarFiltros (libre) {
  return function(dispatch){
    return dispatch({
      type: "LIMPIAR_FILTRO",
      payload:libre
    })
  }
}

