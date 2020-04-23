"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var tokenMiddelware = function (req, res, next) {
    try {
        var user = req.body;
        jsonwebtoken_1.default.verify(user.token, "secret");
        next();
    }
    catch (err) {
        throw err;
    }
};
exports.tokenMiddelware = tokenMiddelware;
var generateToken = function (user) {
    var token = jsonwebtoken_1.default.sign(user, "secret");
    user.token = token;
    return user;
};
exports.generateToken = generateToken;
