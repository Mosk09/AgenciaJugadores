import { Jugador } from "../BaseDeDatos/tablas/jugador.js";
import { eliminarImagen, subirImagen } from "../libs/cloudinary.js";
import fs from "fs-extra";
//Llama a todos los jugadores
export const getJugadores = async (req, res) => {
  try {
    const jugadores = await Jugador.findAll();
    res.json(jugadores);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//llama a jugadr por ID
export const getByIdJugadores = async (req, res) => {
  try {
    const { id } = req.params;
    const pj = await Jugador.findByPk(id);
    res.json(pj);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Agrega jugadores por objeto
export const postJugadores = async (req, res) => {
  try {
    let imagen;
    if (req.files.imagen && !Array.isArray(req.files.imagen)) {
      const result = await subirImagen(req.files.imagen.tempFilePath);
      await fs.remove(req.files.imagen.tempFilePath);
      imagen = [
        {
          url: result.secure_url,
          public_id: result.public_id,
        },
      ];
      req.body.imagen = imagen;
    }
    if (req.files.imagen && Array.isArray(req.files.imagen)) {
      const imagen = [];
      for (const img of req.files.imagen) {
        const result = await subirImagen(img.tempFilePath);
        await fs.remove(img.tempFilePath);
        imagen.push({
          url: result.secure_url,
          public_id: result.public_id,
        });
      }
      req.body.imagen = imagen;
    }
    const nuevoJugador = await Jugador.create(req.body);

    res.json(nuevoJugador);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Actualiza jugadores por ID
export const putJugadores = async (req, res) => {
  try {
    const { id } = req.params;
    const jugadorViejo = await Jugador.findByPk(id);
    jugadorViejo.set(req.body);
    jugadorViejo.save();
    res.json(jugadorViejo);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//eliminar jugador
export const deleteJugadores = async (req, res) => {
  try {
    const { id } = req.params;
    const jugadorViejo1 = await Jugador.findByPk(id);
    const jugadorViejo = await Jugador.destroy({ where: { id } });
    if (jugadorViejo1.imagen) {
      for (const img of jugadorViejo1.imagen) {
        await eliminarImagen(img.public_id);
      }
    }
    res.send("jugador eliminado");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
