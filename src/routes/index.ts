import { Application } from "express";
import people from "./peopleRoutes.js";
import classes from "./classRoutes.js";
import levels from "./levelRoutes.js";
import { notFound } from "./utils.js";
const bodyParser = require("body-parser");

const routes = (app: Application) => {
  app.use(bodyParser.json(), people, classes, levels, notFound);
};

export default routes;
