import express from "express";
import Controller from "./Controller.js";
import PeopleServices from "../services/PeopleServices.js";

const peopleServices = new PeopleServices();

class PeopleController extends Controller {
  constructor() {
    super(peopleServices);
  }

  async addPerson(req: express.Request, res: express.Response) {
    const { p_name, email, p_role } = req.body;
    if (p_name && email && p_role) {
      await super.add(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  async updatePerson(req: express.Request, res: express.Response) {
    const { p_role, p_name, email, is_active } = req.body;
    if (p_role || p_name || email || typeof is_active === "boolean") {
      await super.update(req, res);
    } else {
      return res.sendStatus(400);
    }
  }

  async cancelStudentAndEnrollments(
    req: express.Request,
    res: express.Response
  ) {
    const { id } = req.params;

    try {
      const person = await peopleServices.getOneByPk(Number(id));
      const isStudent = person.p_role === "student";
      if (isStudent) {
        await peopleServices.cancelStudentAndEnrollments(Number(id));
        return res
          .status(200)
          .json({ message: `Enrollments from student with ${id} removed` });
      } else {
        return res
          .status(406)
          .json({ message: "Can't remove classes from non student roles." });
      }
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getAllStudentsIncludingDeletedOrInactive(
    _: express.Request,
    res: express.Response
  ) {
    try {
      const everyone = await peopleServices.getAllWithoutRestriction();
      return res.status(200).json(everyone);
    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}

export default PeopleController;
