import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js"

const app = express()

app.use(express.json())


const port=process.env.PORT ||8080
app.listen(port, () => {
     console.log("server is runing")
})