import express from "express";
import { uplaodImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/upload", upload.single("file"), uplaodImage);

export default router;
