const database = require("../models");
import express from "express";

class PeopleController {
  static async getAll(req: express.Request, res: express.Response) {
    try {
      const allPeople = await database.People.findAll();
      return res.status(200).json(allPeople);
    } catch (error: any) {
      return res.status(500).json(error.message);
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

  static async addPerson(req: express.Request, res: express.Response) {
    const { p_name, email, p_role, is_active = true } = req.body;
    try {
      if (p_name && email && p_role) {
        const newlyAddedPerson = await database.People.create({
          p_name,
          email,
          p_role,
          is_active,
        });
        return res.status(200).json(newlyAddedPerson);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async updatePerson(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const updateInfo = req.body;
    try {
      const { p_role, p_name, email, is_active } = updateInfo;
      if (p_role || p_name || email || is_active) {
        await database.People.update(updateInfo, {
          where: { id: Number(id) },
        });
        const updatedPerson = await database.People.findOne({
          where: { id: Number(id) },
        });
        return res.status(200).json(updatedPerson);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async removePerson(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      await database.People.destroy({
        where: { id: Number(id) },
      });
      return res
        .status(200)
        .json({ message: `Person with id ${id} successfully deleted` });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default PeopleController;
