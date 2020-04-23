import express from "express";
import userController from "./user.controller";
import { tokenMiddelware } from "../../middlewares/jwt.service";

const router = express.Router();

router.put("/", userController.loginUser);
router.post("/", userController.registerUser);
router.put("/:id", tokenMiddelware, userController.updateUser);

export default router;
