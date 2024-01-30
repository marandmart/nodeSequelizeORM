import express from "express";
import Controller from "./Controller.js";
import PeopleServices from "../services/PeopleServices.js";
import EnrollmentController from "./EnrollmentController.js";

const peopleServices = new PeopleServices();
const enrollmentController = new EnrollmentController();

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

  async getAllWithoutConstraints(req: express.Request, res: express.Response) {
    try {
      const everyone = await peopleServices.getAllWithoutRestriction();
      return res.status(200).json(everyone);
    } catch (error: any) {
      return res.status(500).json(error.message);
    }
  }

  getEnrollments(req: express.Request, res: express.Response) {
    enrollmentController.getEnrollments(req, res);
  }

  getEnrollemnt(req: express.Request, res: express.Response) {
    enrollmentController.getEnrollment(req, res);
  }

  enroll(req: express.Request, res: express.Response) {
    enrollmentController.enroll(req, res);
  }

  updateEnrollment(req: express.Request, res: express.Response) {
    enrollmentController.updateEnrollment(req, res);
  }

  unenroll(req: express.Request, res: express.Response) {
    enrollmentController.remove(req, res);
  }
}

export default PeopleController;
