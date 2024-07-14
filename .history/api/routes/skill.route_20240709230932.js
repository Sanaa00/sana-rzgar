import { Router } from "express";
import { getSkill, addSkill } from "../controller/skill.controller.js";

const router = Router();
router.route("/").get(getAddress).post(AddAddress);

export default router;