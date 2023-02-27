
import {Jugador} from "../BaseDeDatos/tablas/jugador.js"

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
