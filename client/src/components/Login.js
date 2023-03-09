import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/actions/index";
import s from "../modules/Login.module.css";

export default function Login({ login, setLogin,modal, setModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", pass: "" });

  const handlePut = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(input));
    setModal(!modal)
    setTimeout(function () {
      navigate("/");
    }, 2000);
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
        <div className={s.div1}>
          <button className="btn btn-outline-info" type="submit">
            Login
          </button>
        </div>
        <div className={s.divSugerencia}>

        <label>No tienes cuenta? </label>
          <button
            className={s.botonRegistro}
            type="submit"
            onClick={handleRegister}
            >
            Registrate
          </button>
            </div>
      </form>
    </div>
  );
}
