import { Router } from "express";
import { getProject, addProject } from "../controller/project.model.js";

const router = Router();
router.route("/").get(getSkill).post(addSkill);

export default router;