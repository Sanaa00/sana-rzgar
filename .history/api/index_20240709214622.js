import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js"


dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

const port=process.env.PORT ||8080
app.listen(port, () => {
     console.log("server is runing")
})