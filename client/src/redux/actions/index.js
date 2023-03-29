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

//-------------->CREAR JUGADOR<------------------------
export function crearJugador (jugador) { 
    return async function(dispatch){
      const form = new FormData()
      for(let key in jugador){
        form.append(key,jugador[key])
      }
    await axios.post("http://localhost:3001/jugador",form,{
      headers:{
        "Content-Type":"multipart/form-data",
      }
    });
      return dispatch({
        type: "CREAR_JUGADOR",
        // payload: res.data
      })
    }
}
//-------------------LOGIN Y REGISTRO-----------------------
export function postRegister(payload) {
  return async function (dispatch) {
    await axios.post(
      "http://localhost:3001/registro",
      payload
    );
  };
}
export function logIn(payload) {
  return async function (dispatch) {
    let userDb = await axios.post("http://localhost:3001/login", payload);
    const email = { email: userDb.data.usuario.email };
    const admin = { admin: userDb.data.usuario.admin };
    const id = { id: userDb.data.usuario.id };
    const token = { token: userDb.data.token };

    localStorage.setItem("email", email.email.split(":"));
    localStorage.setItem("admin", admin.admin);
    localStorage.setItem("id", id.id);
    localStorage.setItem("token", token.token.split(":"));
    return dispatch({
      type: "LOGIN",
      payload: userDb.data,
    });
  };
}
export function logOUT() {
  return async function (dispatch) {   
    return dispatch({
      type: "LOGOUT"     
    });
  };
}
//----------------------------BUSCADOR----------------------------------
export function buscador (nombre) {
  return function(dispatch){
    return dispatch({
      type: "BUSCADOR",
      payload:nombre
    })
  }
}
//--------------------FAVORITOS----------------------------------------------
export function addFavoritos(favorito) {
  return async function (dispatch) {
    await axios.post(
      `http://localhost:3001/usuario/${favorito.id}/fav`,favorito
    );
  };
}
export function deleteFavoritos(favorito) {
  return async function (dispatch) {
   await axios.put(
      `http://localhost:3001/usuario/${favorito.id}/fav`,favorito
    );
    return dispatch({
      type: "DELETE_FAVORITOS",
      payload: favorito.idJugador
    })
  };
}
export function getFavoritos(id) {
  return async function(dispatch){
    const res = await axios.get(`http://localhost:3001/usuario/${id}/fav`);
    
      return dispatch({
        type: "GET_FAVORITOS",
        payload: res.data
      })
    }
}
//-------------->CREAR DESTACADO<------------------------
export function crearDestacado (jugador) { 
  return async function(dispatch){
    const form = new FormData()
    for(let key in jugador){
      form.append(key,jugador[key])
    }
 await axios.post("http://localhost:3001/destacado",form,{
    headers:{
      "Content-Type":"multipart/form-data",
    }
  });
    return dispatch({
      type: "CREAR_DESTACADO",
      // payload: res.data
    })
  }
}
export function getDestacados (){
  return async function(dispatch){
    const res = await axios.get("http://localhost:3001/destacado")

    return dispatch({
      type:"GET_DESTACADOS",
      payload: res.data
    })
  }
}