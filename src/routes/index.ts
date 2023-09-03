import express, { Application } from "express";
import people from "./peopleRoutes.js";
const bodyParser = require("body-parser");

const routes = (app: Application) => {
  app.use(bodyParser.json());
  app.use(people);
};

export default routes;
