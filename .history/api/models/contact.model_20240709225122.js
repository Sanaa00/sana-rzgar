import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
     name:{type:String,required:true},
     url: { type: String, required: true },
     img: { type: String, required: true },
 
})


const contact = mongoose.model("contact", contactSchema)

export default contact;