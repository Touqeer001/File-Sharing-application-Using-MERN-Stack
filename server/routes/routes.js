import express from "express";
import { downloadImage, uplaodImage } from "../controller/image-controller.js";
import upload from "../utils/upload.js";

const router = express.Router();
router.post("/upload", upload.single("file"), uplaodImage);

//for downloading the file
router.get("/file/:fileId", downloadImage);

export default router;
