import express from "express";
import { getBook } from "../controller/book.controller.js";
import { login, signup } from "../controller/user.controller.js";

const router = express.Router();

router.get("/",getBook);
router.post("/user/signup", signup);
router.post("/user/login", login);

export default router;