"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
var user_routes_1 = __importDefault(require("./api/user/user.routes"));
var charts_routes_1 = __importDefault(require("./api/chart/charts.routes"));
var app = express_1.default();
var http = require("http").createServer(app);
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(path_1.default.resolve(__dirname, "public")));
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(__dirname, "public", "index.html"));
});
app.use("/api/user", user_routes_1.default);
app.use("/api/charts", charts_routes_1.default);
var port = process.env.PORT || 3030;
http.listen(port, function () {
    console.log("Todos server is running on port : " + port);
});
