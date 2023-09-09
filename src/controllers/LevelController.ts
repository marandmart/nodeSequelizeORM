const database = require("../models");
import express from "express";

class LevelController {
  static async getAll(_: express.Request, res: express.Response) {
    try {
      const allLevels = await database.Level.findAll();
      res.status(200).json(allLevels);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async getLevel(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      const level = await database.Level.findOne({ where: { id: Number(id) } });
      if (level) return res.status(200).json(level);
      else return res.status(204);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async addLevel(req: express.Request, res: express.Response) {
    const { description } = req.body;
    try {
      if (description) {
        const newLevel = await database.Level.create({
          description,
        });
        return res.status(200).json(newLevel);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async updateLevel(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const updateInfo = req.body;
    const { description } = updateInfo;
    try {
      if (description) {
        await database.Level.update(updateInfo, {
          where: { id: Number(id) },
        });
        const updatedLevel = await database.Level.findOne({
          where: { id: Number(id) },
        });
        return res.status(200).json(updatedLevel);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteLevel(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      if (id) {
        await database.Level.destroy({
          where: { id: Number(id) },
        });
        return res
          .status(200)
          .json({ message: `Level with id ${id} successfully deleted` });
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default LevelController;
