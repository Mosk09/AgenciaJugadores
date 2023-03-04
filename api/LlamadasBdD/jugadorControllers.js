
import {Jugador} from "../BaseDeDatos/tablas/jugador.js"
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dq7o1joxe",
  api_key: "841287791179364",
  api_secret: "U6weoZpsiuAOHptEKtrYKK3U3nc",
});
//Llama a todos los jugadores
export const getJugadores = async (req,res)=>{
   try {      
      const jugadores=  await Jugador.findAll()
      res.json(jugadores)
   } catch (error) {
    console.log(error)
   }
}
//llama a jugadr por ID
export const getByIdJugadores =  async (req,res)=>{
    try {
        const {id}= req.params
        const pj=  await Jugador.findByPk(id)
        res.json(pj)
        
    } catch (error) {
        console.log(error)
    }
}
//Agrega jugadores por objeto
export const postJugadores =  async(req,res)=>{
   try {   
      const nuevoJugador = await Jugador.create(req.body)
      res.json(nuevoJugador)
   } catch (error) {
      console.log(error)
   }
}
//Actualiza jugadores por ID
export const putJugadores = async (req, res)=>{
   try {
      const {id}= req.params
      const jugadorViejo = await Jugador.findByPk(id)
      jugadorViejo.set(req.body)
      jugadorViejo.save()
      res.json(jugadorViejo)
   } catch (error) {
    console.log(error)
   }
}
//eliminar jugador
export const deleteJugadores =  async(req,res)=>{
    try {
        const {id}= req.params
        const jugadorViejo = await Jugador.destroy({where:{id}})
   
        res.send("Jugador eliminado")
     } catch (error) {
        console.log(error)
     }
 }
 //Subir foto del jugador
 export const subirFotos = async (req, res, next) => {
   try {
     const { imagenes } = req.body;
     let promises = [];
   //   imagenes.forEach(async (e) => {
   //     promises.push(
   //       cloudinary.uploader.upload(e, {
   //         folder: "CalviApp",
   //       })
   //     );
   //   });
   imagenes.forEach(async (e) => {      
            const resp = await cloudinary.uploader.upload(e, {
                 folder: "CalviApp",
               })
               promises.push(resp)             
   })
     const response = await Promise.all(promises);
     res.send({response});
   } catch (error) {
     next(error);
   }
 };
 //eliminar foto subida
 export const eliminarFoto = async (req,res)=>{
   try {
      const {public_id} = req.body
     const borrarFoto = await cloudinary.uploader.destroy(public_id);
     res.send(borrarFoto)

   } catch (error) {
      
   }
 }
