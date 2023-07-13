import express from "express";
import { formSubmit } from "../controllers/form.js";

const router = express.Router();

router.post("/submit", formSubmit);

export default router;
