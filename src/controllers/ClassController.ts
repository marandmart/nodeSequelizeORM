const database = require("../models");
import express from "express";

class ClassController {
  static async getAll(req: express.Request, res: express.Response) {
    try {
      const allClasses = await database.Class.findAll();
      res.status(200).json(allClasses);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async getClass(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      const _class = await database.Class.findOne({
        where: {
          id: Number(id),
        },
      });
      if (_class) return res.status(200).json(_class);
      else return res.status(204);
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async addClass(req: express.Request, res: express.Response) {
    const { teacher_id, level_id, date_start } = req.body;
    try {
      if (teacher_id && level_id) {
        const newClass = await database.Class.create({
          teacher_id,
          level_id,
          date_start,
        });
        return res.status(200).json(newClass);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      res.status(500).json(error.message);
    }
  }

  static async updateClass(req: express.Request, res: express.Response) {
    const { id } = req.params;
    const updateData = req.body;
    const { teacher_id, level_id, date_start } = updateData;
    try {
      if (teacher_id || level_id || date_start) {
        await database.Class.update(updateData, {
          where: { id: Number(id) },
        });
        const updatedClass = await database.Class.findOne({
          where: { id: Number(id) },
        });
        return res.status(200).json(updatedClass);
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteClass(req: express.Request, res: express.Response) {
    const { id } = req.params;
    try {
      if (id) {
        await database.Class.destroy({
          where: { id: Number(id) },
        });
        return res
          .status(200)
          .json({ message: `Class with id ${id} successfully deleted` });
      } else {
        return res.status(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default ClassController;
