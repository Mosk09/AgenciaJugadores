import { Usuario } from "../BaseDeDatos/tablas/usuario.js";
import { Jugador } from "../BaseDeDatos/tablas/jugador.js";
import { eliminarImagen, subirImagen } from "../libs/cloudinary.js";
import fs from "fs-extra";

//Llama a todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//llama a usuario por ID
export const getByIdUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await Usuario.findByPk(id);
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Agrega usuarios por objeto
export const postUsuarios = async (req, res) => {
  try {
    const { nombre, pass, email, admin, clubes, favoritos } = req.body;
    let imagen;
    if (req.files.imagen) {
      const result = await subirImagen(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);
      imagen = [
        {
          url: result.secure_url,
          public_id: result.public_id,
        },
      ];
    }
    const nuevoUsuarios = await Usuario.create({
      nombre,
      pass,
      email,
      admin,
      clubes,
      favoritos,
      imagen,
    });
    res.json(nuevoUsuarios);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Actualiza usuarios por ID
export const putUsuarios = async (req, res) => {
  try {
    const { id } = req.params;
    const usuarios = await Usuario.findByPk(id);
    usuarios.set(req.body);
    usuarios.save();
    res.json(usuarios);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//eliminar usuario
export const deleteUsuarios = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario1 = await Usuario.findByPk(id);
    const usuarios = await Usuario.destroy({ where: { id } });
    if (usuario1.imagen) {
      usuario1.imagen.forEach(async (e) => {
        await eliminarImagen(e.public_id);
      });
    }
    res.send("usuario eliminado");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
// Llamar todos los jugadores favoritos del usuario
export const getFavoritos = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    let fav = [];
    for (let i = 0; i < usuario.favoritos.length; i++) {
      let ids = usuario.favoritos[i];
      let jugador = await Jugador.findByPk(ids);
      fav = [...fav, jugador];
    }
    res.json(fav);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
