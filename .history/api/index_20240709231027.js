import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js"
import skillRoute from "./routes/skill.route.js"

dotenv.config();
const app = express()
app.use(express.json())
app.use(cors())

 

// app.use("/",name)



const port=process.env.PORT ||8080
app.listen(port, () => {
     console.log("db is connecting")
})