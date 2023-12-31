import express from "express";
import { PostController } from "./post.controller";

const router = express.Router();

router.post("/create-post", PostController.insertIntoPost);
router.patch("/:id", PostController.updatePost);
router.delete("/:id", PostController.deletePost);
router.get("/", PostController.getAllPost);
router.get("/learn-aggregrate", PostController.learnAggregrateAndGrouping);

export const postRoutes = router;
