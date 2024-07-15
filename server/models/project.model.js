import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
     name:{type:String,required:true},
     title:{type:String,required:true},
     url: { type: String, required: true },
     img: { type: String, required: true },
     tech: [{ type: String, required: true }],
     
})


const project = mongoose.model("project", projectSchema)

export default project