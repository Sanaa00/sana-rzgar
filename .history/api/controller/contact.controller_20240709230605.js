import Contact from "../models/contact.model.js"



export const getContact = async (req, res) => {
     const contact = await Contact.find();
     
     res.json({status:"success",data:contact})
}

export const addontact = async (req, res) => {
     const contact = await Contact.create(req.body);

     res.json({status:"success",data:contact})
}