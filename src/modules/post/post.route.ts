import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertIntoPost);
router.get("/", PostController.getAllPost);

export const postRoutes = router;
