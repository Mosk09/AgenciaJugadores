import app from "./app.js"
import {sequelize} from './BaseDeDatos/db.js';

// import "./BaseDeDatos/tablas/jugador.js";
// import "./BaseDeDatos/tablas/usuario.js";
(async () => {
  await sequelize.sync({ force: false })
  app.listen(3001,()=>{
    console.log("todo ok")

  })
})()