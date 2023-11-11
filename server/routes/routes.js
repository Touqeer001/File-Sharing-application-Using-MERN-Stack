import express from "express";
import { uplaodImage } from "../controller/image-controller.js";

const router = express.Router();
router.post("/upload", uplaodImage);

export default router;
