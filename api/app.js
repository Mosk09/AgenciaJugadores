import express from "express"
import router from "./LlamadasBdD/routes.js"
import cors from "cors"
import {auth} from "express-openid-connect"
import "./BaseDeDatos/tablas/jugador.js";
import "./BaseDeDatos/tablas/usuario.js";
// import * as dotenv from 'dotenv' 
// dotenv.config()

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret:  process.env.SECRET,
//     baseURL: process.env.BASEURL,
//     clientID: process.env.CLIENTID,
//     issuerBaseURL: process.env.ISSUER
//   };

const app = express();
app.use(express.json())
app.use(cors())

//app.use(auth(config));
// app.get('/', (req, res) => {
    //     console.log(req.oidc.isAuthenticated());
    //   });
app.use("/", router)

export default app