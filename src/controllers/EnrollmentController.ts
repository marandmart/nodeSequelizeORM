import express from "express";
import EnrollmentServices from "../services/EnrollmentServices.js";
import Controller from "./Controller.js";

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
