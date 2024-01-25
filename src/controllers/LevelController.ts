import express from "express";

import Controller from "./Controller.js";
import LevelServices from "../services/LevelServices.js";

const levelServices = new LevelServices();

class LevelController extends Controller {
  constructor() {
    super(levelServices);
  }

  addLevel(req: express.Request, res: express.Response) {
    const { description } = req.body;

    if (description) {
      super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  updateLevel(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const { description } = req.body;

    if (description && id) {
      super.update(req, res);
    } else {
      return res.status(400);
    }
  }
}

export default LevelController;
