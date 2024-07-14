import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connectDb} from "./config/db.js"
import skillRoute from "./routes/skill.route.js"
import  ProjectRoute from "./routes/project.route.js"
import ContactRoute from "./routes/contact.route.js"


dotenv.config();
connectDb()
const app = express()
app.use(express.json())
app.use(cors())

 

app.use("/api/skill",skillRoute)
app.use("/api/project",ProjectRoute)
app.use("/api/contact",ContactRoute)



const port=process.env.PORT 
app.listen(port, () => {
     console.log("db is connecting")
})