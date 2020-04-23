"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("./user.controller"));
var jwt_service_1 = require("../../middlewares/jwt.service");
var router = express_1.default.Router();
router.put("/", user_controller_1.default.loginUser);
router.post("/", user_controller_1.default.registerUser);
router.put("/:id", jwt_service_1.tokenMiddelware, user_controller_1.default.updateUser);
exports.default = router;
