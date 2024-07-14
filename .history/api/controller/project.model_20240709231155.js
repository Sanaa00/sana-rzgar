import Project from "../models/project.model.js"



export const getProject = async (req, res) => {
     const project = await Project.find();
     
     res.json({status:"success",data:project})
}

export const addProject = async (req, res) => {
     const project = await Project.create(req.body);

     res.json({status:"success",data:project})
}