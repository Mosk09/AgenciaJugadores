import { siguiente } from "../actions";

const inicialState = {
  jugadores: [],
  paginaActual: 0,
  siguiente: 0,
  anterior: 0,
  cantidadPaginas: [],
  filtroJugadores: [],
  loading: false,
  favoritos: [],
  destacados: [],
  usuario: {},
  admin: false,
};

export default function reducer(state = inicialState, action) {
  switch (action.type) {
    case "GET_JUGADORES":
      let num = Math.ceil(action.payload.length / 20);
      let cant = Array.from({ length: num }, (u, i) => i);
      return {
        ...state,
        jugadores: action.payload,
        cantidadPaginas: cant,
        siguiente: 20,
        paginaActual: 1,
      };
    case "ANTERIOR":
      if (state.paginaActual <= 1) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        paginaActual: state.paginaActual - 1,
        anterior: state.anterior - 20,
        siguiente: state.siguiente - 20,
      };
    case "SIGUIENTE":
      if (state.paginaActual >= state.cantidadPaginas.length) {
        return {
          ...state,
        };
      }
      let next1 = state.anterior + 20;
      let next2 = state.siguiente + 20;
      return {
        ...state,
        paginaActual: state.paginaActual + 1,
        anterior: next1,
        siguiente: next2,
      };
    case "SALTAR_PAGINA":
      let next = 20 * action.payload;
      let prev = 20 * action.payload - 20;
      return {
        ...state,
        paginaActual: action.payload,
        siguiente: next,
        anterior: prev,
      };
    case "FILTRO_POSICION":
      if (action.payload === "Posicion") {
        return {
          ...state,
          filtroJugadores: [],
        };
      }
      let filtro = state.jugadores.filter((e) => e.posicion === action.payload);
      return {
        ...state,
        filtroJugadores: [...filtro],
      };
    case "FILTRO_EDAD":
      if (action.payload === "Categoria") {
        return {
          ...state,
          filtroJugadores: [],
        };
      }
      if (parseInt(action.payload) < 2000) {
        let filtro5 = state.filtroJugadores.filter(
          (e) => e.nacimiento.slice(0, 4) * 1 <= parseInt(action.payload)
        );
        if (filtro5.length === 0)
          filtro5 = state.jugadores.filter(
            (e) => e.nacimiento.slice(0, 4) * 1 <= parseInt(action.payload)
          );
        return {
          ...state,
          filtroJugadores: [...filtro5],
        };
      }
      if (parseInt(action.payload) >= 2004) {
        let filtro6 = state.filtroJugadores.filter(
          (e) => e.nacimiento.slice(0, 4) * 1 >= parseInt(action.payload)
        );
        if (filtro6.length === 0)
          filtro6 = state.jugadores.filter(
            (e) => e.nacimiento.slice(0, 4) * 1 >= parseInt(action.payload)
          );
        return {
          ...state,
          filtroJugadores: [...filtro6],
        };
      }
      let filtro9 = state.filtroJugadores.filter(
        (e) =>
          e.nacimiento.slice(0, 4) * 1 >= parseInt(action.payload) &&
          e.nacimiento.slice(0, 4) * 1 < parseInt(action.payload) + 2
      );
      if (filtro9.length === 0)
        filtro9 = state.jugadores.filter(
          (e) =>
            e.nacimiento.slice(0, 4) * 1 >= parseInt(action.payload) &&
            e.nacimiento.slice(0, 4) * 1 < parseInt(action.payload) + 2
        );
      return {
        ...state,
        filtroJugadores: [...filtro9],
      };

    case "FILTRO_LIBRE":
      if (action.payload === "Disponibilidad") {
        return {
          ...state,
          filtroJugadores: [],
        };
      }
      let filtro5;
      if (action.payload === "false") {
        filtro5 = state.filtroJugadores.filter((e) => e.libre === false);
        if (filtro5.length === 0) {
          filtro5 = state.jugadores.filter((e) => e.libre === false);
        }
      } else {
        filtro5 = state.filtroJugadores.filter((e) => e.libre === true);
        if (filtro5.length === 0) {
          filtro5 = state.jugadores.filter((e) => e.libre === true);
        }
      }
      return {
        ...state,
        filtroJugadores: [...filtro5],
      };
    case "LIMPIAR_FILTRO":
      return {
        ...state,
        filtroJugadores: [],
      };
    case "SUBIR_FOTOS":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN":
      return {
        ...state,
        usuario: action.payload.usuario,
      };
    case "LOGOUT":
      return {
        ...state,
        usuario: {},
      };
    case "BUSCADOR":
      let filtroBusqueda = state.jugadores.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload)
      );
      return {
        ...state,
        filtroJugadores: [...filtroBusqueda],
      };
    case "GET_FAVORITOS":
      return {
        ...state,
        favoritos: action.payload,
      };
    case "DELETE_FAVORITOS":
      let fav = state.favoritos.filter((e) => e.id !== action.payload);
      return {
        ...state,
        favoritos: fav,
      };
    case "GET_DESTACADOS":
      return {
        ...state,
        destacados: action.payload,
      };
    case "DELETE_JUGADOR":
      return {
        ...state,
      };

    default: {
      return {
        ...state,
      };
    }
  }
}
