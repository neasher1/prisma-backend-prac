import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.post("/create-user", userController.insertIntoDb);
router.post("/profile", userController.insertOrUpdateIntoProfile);
router.get("/", userController.getUsers);
router.get("/:id", userController.getSingleUser);

export const userRoutes = router;
