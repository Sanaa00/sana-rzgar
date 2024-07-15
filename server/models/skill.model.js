import mongoose from "mongoose"


const skillSchema = new mongoose.Schema({
     name:{type:String,required:true},
     icon:{type:String},
})


const skill = mongoose.model("skill", skillSchema)
export default skill