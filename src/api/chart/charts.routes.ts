import express from "express";
import chartsController from "./charts.controller";
import { tokenMiddelware } from "../../middlewares/jwt.service";

const router = express.Router();

router.put("/", tokenMiddelware, chartsController.getChart);

export default router;
