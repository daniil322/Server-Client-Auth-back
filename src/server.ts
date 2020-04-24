import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";

import userRoutes from "./api/user/user.routes";
import chartsRoutes from "./api/chart/charts.routes";

const app = express();
var http = require("http").createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  const corsOptions = {
    origin: [
      "http://127.0.0.1:8080",
      "http://localhost:8080",
      "http://127.0.0.1:3000",
      "http://localhost:3000",
    ],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

app.use("/api/user", userRoutes);
app.use("/api/charts", chartsRoutes);

const port = process.env.PORT || 3030;
http.listen(port, () => {
  console.log("server is running on port : " + port);
});
