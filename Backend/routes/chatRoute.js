import { Router } from "express";
import { deleteImage, generate, uploadImage } from "../controllers/chatController.js";
import multer from "multer";


const chatRoute = Router();
const upload = multer({ dest: "public/" });

chatRoute.post("/chat", generate);
chatRoute.post("/upload-image", upload.single("file"), uploadImage);
chatRoute.delete("/delete-image",deleteImage);

export default chatRoute;