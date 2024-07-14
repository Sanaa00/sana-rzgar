import { Router } from "express";
import { getContact, addContact } from "../controller/contact.controller.js";

const router = Router();
router.route("/").get(getContact).post(addContact);

export default router;