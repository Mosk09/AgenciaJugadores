import { Destacados } from "../BaseDeDatos/tablas/destacados.js";
import { eliminarImagen, subirImagen } from "../libs/cloudinary.js";
import fs from "fs-extra";
//Llama a todos los Destacados
export const getDestacados = async (req, res) => {
  try {
    const jugadores = await Destacados.findAll();
    res.json(jugadores);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//llama a jugadr por ID
export const getByIdDestacados = async (req, res) => {
  try {
    const { id } = req.params;
    const pj = await Destacados.findByPk(id);
    res.json(pj);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Agrega Destacados por objeto
export const postDestacados = async (req, res) => {
  console.log(req.files)
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
    const nuevoJugador = await Destacados.create(req.body);

    res.json(nuevoJugador);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//Actualiza Destacados por ID
export const putDestacados = async (req, res) => {
  try {
    const { id } = req.params;
    const jugadorViejo = await Destacados.findByPk(id);
    jugadorViejo.set(req.body);
    jugadorViejo.save();
    res.json(jugadorViejo);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
//eliminar Destacado
export const deleteDestacados = async (req, res) => {
  try {
    const { id } = req.params;
    const jugadorViejo1 = await Destacados.findByPk(id);
    const jugadorViejo = await Destacados.destroy({ where: { id } });
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
export const deleteTodos = async (req, res) => {
  try {
    const jugadores = await Destacados.findAll();
   for(let i = 0; i<jugadores.length; i++){
    let id = jugadores[i].id
    if (jugadores[i].imagen) {
      for (const img of jugadores[i].imagen) {
        await eliminarImagen(img.public_id);
      }
    }
    await Destacado.destroy({where:id});
   }
    res.send("Destacados eliminados");
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
};
