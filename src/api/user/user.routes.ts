import express from "express";
import userController from "./user.controller";

const router = express.Router();

router.put("/", userController.loginUser);
router.post("/", userController.registerUser);
router.put("/:id", userController.updateUser);

export default router;
