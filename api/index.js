import app from "./app.js"
import {sequelize} from './BaseDeDatos/db.js';
import {DB_PORT} from "./BaseDeDatos/confg.js"

// import "./BaseDeDatos/tablas/jugador.js";
// import "./BaseDeDatos/tablas/usuario.js";
// import "./BaseDeDatos/tablas/destacados.js";
(async () => {
  await sequelize.sync({ force: false })
  app.listen(DB_PORT,()=>{
    console.log("todo ok")

  })
})()