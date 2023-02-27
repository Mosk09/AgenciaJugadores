import {Usuario} from "../BaseDeDatos/tablas/usuario.js"
import {Jugador} from "../BaseDeDatos/tablas/jugador.js"



//Llama a todos los usuarios
export const getUsuarios = async (req,res)=>{
   try {      
      const usuarios=  await Usuario.findAll()
      res.json(usuarios)
   } catch (error) {
    console.log(error)
   }
}
//llama a usuario por ID
export const getByIdUsuarios =  async (req,res)=>{
    try {
        const {id}= req.params
        const usuarios=  await Usuario.findByPk(id)
        res.json(usuarios)
        
    } catch (error) {
        console.log(error)
    }
}
//Agrega usuarios por objeto
export const postUsuarios =  async(req,res)=>{
   try {   
      const nuevoUsuarios = await Usuario.create(req.body)
      res.json(nuevoUsuarios)
   } catch (error) {
      console.log(error)
   }
}
//Actualiza usuarios por ID
export const putUsuarios = async (req, res)=>{
   try {
      const {id}= req.params
      const usuarios = await Usuario.findByPk(id)
      usuarios.set(req.body)
      usuarios.save()
      res.json(usuarios)
   } catch (error) {
    console.log(error)
   }
}
//eliminar usuario
export const deleteUsuarios =  async(req,res)=>{
    try {
        const {id}= req.params
        const usuarios = await Usuario.destroy({where:{id}})
   
        res.send("Jugador eliminado")
     } catch (error) {
        console.log(error)
     }
 }
// Llamar todos los jugadores favoritos del usuario
export const getFavoritos =  async (req,res)=>{
    try {
        const {id}= req.params
        const usuario=  await Usuario.findByPk(id)
        let fav = []
        for(let i = 0; i<usuario.favoritos.length; i++){
         let ids =  usuario.favoritos[i]
        let jugador =  await Jugador.findByPk(ids)
        fav=[...fav,jugador]
        }
        res.json(fav)
        
    } catch (error) {
        console.log(error)
    }
}