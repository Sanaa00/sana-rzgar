import { Router } from "express";
import { getProject, addProject } from "../controller/project.model.js";

const router = Router();
router.route("/").get(getProject).post(addProject);

export default router;