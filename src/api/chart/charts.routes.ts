import express from "express";
import chartsController from "./charts.controller";

const router = express.Router();

router.get("/", chartsController.getChart);

export default router;
