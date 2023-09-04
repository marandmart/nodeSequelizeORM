const database = require("../models");
import express from "express";

class PeopleController {
  static async getAll(req: express.Request, res: express.Response) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (error) {
      return res.status(404).json(error);
    }
  }

  static async getPerson(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      const person = await database.People.findOne({
        where: { id: Number(id) },
      });

      if (person) return res.status(200).json(person);
      else return res.status(204);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default PeopleController;
