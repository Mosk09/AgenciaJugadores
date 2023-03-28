import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoritos } from "../redux/actions";
import Cards from "../components/Cards";
import s from "../modules/Jugadores.module.css";


export default function Favoritos() {
  const estado = useSelector((state) => state);
  const {favoritos} = useSelector((state) => state);
  const dispatch = useDispatch();

const token = localStorage.getItem("token")
const id = localStorage.getItem("id")
  useEffect(() => {
    if(token){
      estado.usuario.id?dispatch(getFavoritos(estado.usuario.id)): dispatch(getFavoritos(id))

    }

  }, [token]);


  return (
    <div className={s.cont}>
      <div className={s.cont2}>
  

        <div className={`container ${s.container}`}>
          {Array.isArray(estado.favoritos) && estado.favoritos.length> 0 ?  estado.favoritos?.map((e, i) => <Cards key={i} prop={e} />)
          : 
            <div>
              <h1>No hay Jugadores Favoritos</h1>
            </div>
         }
        </div>

      </div>
    </div>
  );
}
