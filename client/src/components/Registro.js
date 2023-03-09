import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRegister } from "../redux/actions/index";
import s from "../modules/Registro.module.css";

export default function Register({ login, setLogin,modal, setModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ nombre: "", pass: "", email: "" });
  const handlePut = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegister(input));
    setModal(!modal)
    navigate("/");
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setLogin(!login);
  };
  return (
    <div className={s.container0}>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.div1}>
          <label htmlFor="" className={s.label}>
            Nombre
          </label>
          <input
            type="text"
            className={s.input}
            id="validationServer01"
            name="nombre"
            onChange={handlePut}
            required
          />
        </div>
        <div className={s.div1}>
          <label htmlFor="" className={s.label}>
            Email
          </label>
          <input
            type="text"
            className={s.input}

            name="email"
            onChange={handlePut}
            required
          />
        </div>
        <div className={s.div1}>
          <label htmlFor="" className={s.label}>
            Contraseña
          </label>
          <input
            type="password"
            className={s.input}

            name="pass"
            onChange={handlePut}
            required
          />
        </div>
        <div className="d-flex justify-content-evenly">
          <button className="btn btn-outline-info" type="submit">
            Register
          </button>
        </div>
        <div className={s.divSugerencia}>
          <label>Ya tenes cuenta? </label>
          <button
            className={s.botonRegistro}
            type="submit"
            onClick={handleRegister}
          >
            Logeate
          </button>
        </div>
      </form>
    </div>
  );
}
