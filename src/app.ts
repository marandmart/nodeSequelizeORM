import express from "express";
import routes from "./routes/index.js";
import "dotenv/config";

const app = express();
routes(app);

module.exports = app;
