import express from "express";
import Controller from "./Controller";
import ClassServices from "../services/ClassServices.js";

const { Op } = require("sequelize");

type FilterParams = {
  [key: string]: object | null;
};

type FilterParam = {
  [key: string | symbol]: string | null;
};

const classServices = new ClassServices();

class ClassController extends Controller {
  constructor() {
    super(classServices);
  }

  async getClasses(req: express.Request, res: express.Response) {
    const { start_date, end_date } = req.query;

    let whereParams: FilterParams = {};
    if (start_date || end_date) {
      whereParams.date_start = {} as FilterParam;
    }

    if (start_date !== null && start_date !== undefined) {
      (whereParams.date_start as FilterParam)[Op.gte] = start_date as string;
    }

    if (end_date !== null && end_date !== undefined) {
      (whereParams.date_start as FilterParam)[Op.lte] = end_date as string;
    }

    try {
      const filteredCourses = await classServices.getAll(whereParams);
      return res.status(200).json(filteredCourses);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async addClass(req: express.Request, res: express.Response) {
    const { teacher_id, level_id } = req.body;
    if (teacher_id && level_id) {
      await super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  async updateClass(req: express.Request, res: express.Response) {
    const { teacher_id, level_id, date_start } = req.body;
    if (teacher_id || level_id || date_start) {
      await super.update(req, res);
    } else {
      return res.sendStatus(400);
    }
  }
}

export default ClassController;
