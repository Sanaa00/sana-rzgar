import { Router } from "express";
import { getSkill, addSkill } from "../controller/skill.controller.js";

const router = Router();
router.route("/").get(getSkill).post(addSkill);

export default router;