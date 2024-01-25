const database = require("../models");
import express from "express";

import Controller from "./Controller.js";
import PeopleServices from "../services/PeopleServices.js";
import Services from "../services/Services.js";

const peopleServices = new PeopleServices();
const enrollmentServices = new Services("enrollment");

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  addPerson(req: express.Request, res: express.Response) {
    const { p_name, email, p_role } = req.body;
    if (p_name && email && p_role) {
      super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  updatePerson(req: express.Request, res: express.Response) {
    const { p_role, p_name, email, is_active } = req.body;
    if (p_role || p_name || email || typeof is_active === "boolean") {
      super.update(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  // ATUALIZAR ESSES
  // TRATAR ERRO PRA QUANDO DA UM POST PRA UM ID QUE NÃO EXISTE

  static async getEnrollment(req: express.Request, res: express.Response) {
    const { s_id, enrollment_id } = req.params;
    try {
      const enrollment = await database.Enrollment.findOne({
        where: { id: Number(enrollment_id), s_id: Number(s_id) },
      });
      if (enrollment) return res.status(200).json(enrollment);
      else return res.status(204);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  // getEnrollemnt(req: express.Request, res: express.Response) {
  //   const { s_id, enrollment_id } = req.params;
  //   if (s_id && enrollment_id) {
  //     super.findByIds(req, res);
  //   } else {
  //     return res.status(400);
  //   }
  // }

  static async enroll(req: express.Request, res: express.Response) {
    const { s_id } = req.params;
    const { curr_status = "enrolled", class_id } = req.body;
    try {
      if (s_id && class_id) {
        const newEnrollment = await database.Enrollment.create({
          curr_status,
          s_id: Number(s_id),
          class_id,
        });
        return res.status(200).json(newEnrollment);
      } else {
        return res.status(204);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async updateEnrollment(req: express.Request, res: express.Response) {
    const { s_id, enrollment_id } = req.params;
    const enrollmentUpdate = req.body;
    const { curr_status, class_id } = enrollmentUpdate;
    try {
      if (curr_status || class_id) {
        await database.Enrollment.update(enrollmentUpdate, {
          where: {
            id: Number(enrollment_id),
            s_id: Number(s_id),
          },
        });
        const updatedEnrollment = await database.Enrollment.findOne({
          where: { id: Number(enrollment_id), s_id: Number(s_id) },
        });
        return res.status(200).json(updatedEnrollment);
      } else {
        return res.status(204);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  static async unenroll(req: express.Request, res: express.Response) {
    const { s_id, enrollment_id } = req.params;
    try {
      await database.Enrollment.destroy({
        where: {
          id: Number(enrollment_id),
          s_id: Number(s_id),
        },
      });
      return res.status(200).json({
        message: `Enrollment with id ${enrollment_id} successfully deleted`,
      });
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }
}

export default PeopleController;
