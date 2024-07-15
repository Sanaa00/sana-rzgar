import mongoose from "mongoose"

const contactSchema = new mongoose.Schema({
     name:{type:String,required:true},
     email: { type: String, required: true },
     phone: { type: Number, required: true },
     message: { type: String, required: true },
     // img: { type: String, required: true },
 
})


const contact = mongoose.model("contact", contactSchema)

export default contact;