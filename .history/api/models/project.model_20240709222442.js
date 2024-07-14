import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
     name:{type:String,required:true},
     title:{type:String,required:true},
     url: { type: String, required: true },
     img: { type: String, required: true },
     url:[ type: String, required: true ],
     
})