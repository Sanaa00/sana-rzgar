import mongoose from "mongoose"

export const connectDb =async()=>{
     try{
          await mongoose.connect(process.env.DB_URL);
          console.log("databse is connected")
     } catch (err) {
          console.log("err: " + err)
     }
}