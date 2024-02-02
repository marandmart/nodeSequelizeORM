import express from "express";
import EnrollmentServices from "../services/EnrollmentServices.js";
import Controller from "./Controller.js";
import PeopleServices from "../services/PeopleServices.js";
const Sequelize = require("sequelize");

const peopleServices = new PeopleServices();
const enrollmentServices = new EnrollmentServices();

class EnrollmentController extends Controller {
  constructor() {
    super(enrollmentServices);
  }

  getEnrollment(req: express.Request, res: express.Response) {
    const { s_id, id } = req.params;
    if (s_id && id) {
      super.getOne(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  async getEnrollments(req: express.Request, res: express.Response) {
    const { s_id } = req.params;
    try {
      if (s_id) {
        const student = await peopleServices.getOne({ id: Number(s_id) });
        // Enrollments retrieved using mixing defined in models/people, as enrolled
        const enrollments = await student.getEnrolled();
        return res.status(200).json(enrollments);
      } else {
        return res.sendStatus(400);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  async getEnrollmentCount(req: express.Request, res: express.Response) {
    const { s_id } = req.params;
    try {
      if (s_id) {
        const enrolledStudentList = await enrollmentServices.getAndCount({
          where: {
            s_id: Number(s_id),
            curr_status: "confirmed",
          },
        });
        return res.status(200).json(enrolledStudentList);
      }
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getEnrollmentsFull(req: express.Request, res: express.Response) {
    const FULL_AMOUNT = 2;
    try {
      const coursesFull = await enrollmentServices.getAndCount({
        where: {
          curr_status: "confirmed",
        },
        attributes: ["class_id"],
        group: ["class_id"],
        having: Sequelize.literal(`count(class_id) > ${FULL_AMOUNT}`),
      });
      return res.status(200).json(coursesFull.count);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getEveryEnrollment(req: express.Request, res: express.Response) {
    const { s_id } = req.params;
    try {
      if (s_id) {
        const student = await peopleServices.getOne({ id: Number(s_id) });
        // Using the same idea of scope as the one above
        const allEnrollments = await student.getAllEnrollments();
        return res.status(200).json(allEnrollments);
      }
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  enroll(req: express.Request, res: express.Response) {
    const { s_id } = req.params;
    const { curr_status = "enrolled", class_id } = req.body;

    if (s_id && class_id) {
      req.body["s_id"] = Number(s_id);
      req.body["curr_status"] = curr_status;
      req.body["class_id"] = class_id;
      super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  updateEnrollment(req: express.Request, res: express.Response) {
    const { curr_status, class_id } = req.body;

    if (curr_status || class_id) {
      super.update(req, res);
    } else {
      return res.sendStatus(400);
    }
  }
}

export default EnrollmentController;
