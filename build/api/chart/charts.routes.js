"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var charts_controller_1 = __importDefault(require("./charts.controller"));
var jwt_service_1 = require("../../middlewares/jwt.service");
var router = express_1.default.Router();
router.put("/", jwt_service_1.tokenMiddelware, charts_controller_1.default.getChart);
exports.default = router;
