import express from "express"



const app = express()

app.use(express.json())


const port=process.env.PORT
app.listen(, () => {
     console.log("server is runing")
})