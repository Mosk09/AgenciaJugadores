import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { buscador } from "../redux/actions";
import s from "../modules/Buscador.module.css"
export default function Buscador() {
  const dispatch = useDispatch();

  const handleBuscador = async (e) => {
    dispatch(buscador( e.target.value.toLowerCase()));
  };
  useEffect(() => {}, []);

  return (
    <div className={s.div1}>
      <input
        onChange={handleBuscador}
        type="text"
        nombre="nombre"
        placeholder="Busqueda por Nombre"
        className={s.input}
      />
    </div>
  );
}
