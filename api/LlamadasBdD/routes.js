import { Router } from "express";
import {
  deleteDestacados,
  getByIdDestacados,
  getDestacados,
  postDestacados,
  putDestacados,
} from "./destacados.controllers.js";
import {
  deleteJugadores,
  getByIdJugadores,
  getJugadores,
  postJugadores,
  putJugadores,
} from "./jugadorControllers.js";
import {
  addFavoritos,
  deleteUsuarios,
  getByIdUsuarios,
  getFavoritos,
  getUsuarios,
  logIn,
  postUsuarios,
  putUsuarios,
  registro,
  removeFavoritos,
} from "./usuarioControllers.js";

const router = Router();

//Llama a todos los jugadores
router.get("/jugador", getJugadores);
//llama a jugadr por ID
router.get("/jugador/:id", getByIdJugadores);
//Agrega jugadores por objeto
router.post("/jugador", postJugadores);
//Actualiza jugadores por ID
router.put("/jugador/:id", putJugadores);
//Eliminar jugador
router.delete("/jugador/:id", deleteJugadores);

//Llama a todos los usuarios
router.get("/usuario", getUsuarios);
//llama a usuario por ID
router.get("/usuario/:id", getByIdUsuarios);
//llama jugadores favoritos del usuario
router.get("/usuario/:id/fav", getFavoritos);
//Sumar jugador a Favoritos
router.post("/usuario/:id/fav", addFavoritos);
//eliminar jugador a Favoritos
router.put("/usuario/:id/fav", removeFavoritos);
//Agrega usuarios por objeto
router.post("/usuario", postUsuarios);
//Actualiza usuarios por ID
router.put("/usuario/:id", putUsuarios);
//Eliminar usuario
router.delete("/usuario/:id", deleteUsuarios);

//DESTACADOS
//llama a los destacados
router.get("/destacado", getDestacados);
//llama a destacado por ID
router.get("/destacado/:id", getByIdDestacados);
//Agrega destacados por objeto
router.post("/destacado", postDestacados);
//Actualiza destacados por ID
router.put("/destacado/:id", putDestacados);
//Eliminar destacados
router.delete("/destacado/:id", deleteDestacados);

//REGISTRO Y LOGIN
router.post("/login", logIn);
router.post("/registro", registro);

export default router;
