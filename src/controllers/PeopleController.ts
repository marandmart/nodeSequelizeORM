const database = require("../models");
import express from "express";

class PeopleController {
  static async getAll(req: express.Request, res: express.Response) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

export default PeopleController;
