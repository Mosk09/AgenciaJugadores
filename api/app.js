import express from "express"
import router from "./LlamadasBdD/routes.js"
import cors from "cors"
import bodyParser from "body-parser";
import fileupload from "express-fileupload"


const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json())
app.use(fileupload({
    useTempFiles:true,
    tempFileDir:"./upload"
}))
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.use("/", router)

export default app