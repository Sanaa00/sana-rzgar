import { Router } from "express";
import { getContact, addContact } from "../controller/contact.controller.js";

const router = Router();
router.route("/").get(getProject).post(addProject);

export default router;