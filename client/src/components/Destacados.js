import React, { useEffect } from "react";
import CardsDestacadas from "./CardsDestacadas";
import s from "../modules/Destacados.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getDestacados } from "../redux/actions";



export default function Destacados() {
  const { destacados } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    destacados.length === 0 && dispatch(getDestacados());
  }, [dispatch, destacados]);

  return (
    <div className={`container ${s.container}`}>
      <div className={s.divTitle}>
        <span className={s.title}>DESTACADOS DE LA SEMANA</span>
      </div>
      <div className={`col-10 ${s.divCards}`}>
        {destacados.length>0 ?
          destacados?.map((e, i) => <CardsDestacadas key={i} prop={e} />):<h1>coso</h1>}
      </div>
    </div>
  );
}
