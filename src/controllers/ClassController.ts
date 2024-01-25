const database = require("../models");
import express from "express";

import Controller from "./Controller";
import ClassServices from "../services/ClassServices.js";

const classServices = new ClassServices();

class ClassController extends Controller {
  constructor() {
    super(classServices);
  }

  addClass(req: express.Request, res: express.Response) {
    const { teacher_id, level_id } = req.body;
    if (teacher_id && level_id) {
      super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  updateClass(req: express.Request, res: express.Response) {
    const { teacher_id, level_id, date_start } = req.body;
    if (teacher_id || level_id || date_start) {
      super.update(req, res);
    } else {
      return res.sendStatus(400);
    }
  }
}

export default ClassController;
