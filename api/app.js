import express from "express"
import router from "./LlamadasBdD/routes.js"
import cors from "cors"

import "./BaseDeDatos/tablas/jugador.js";
import "./BaseDeDatos/tablas/usuario.js";

const app = express();
app.use(express.json())
app.use(cors())
app.use("/", router)

export default app