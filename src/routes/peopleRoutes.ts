import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";

const router = Router();

const peopleController = new PeopleController();

router.get("/people/:id", (req, res) => peopleController.getOne(req, res));
router.get("/people", (req, res) => peopleController.getAll(req, res));
router.post("/people", (req, res) => peopleController.addPerson(req, res));
router.put("/people/:id", (req, res) =>
  peopleController.updatePerson(req, res)
);
router.delete("/people/:id", (req, res) => peopleController.remove(req, res));
router.get("/people/:s_id/enrollments/:id", (req, res) =>
  peopleController.getEnrollemnt(req, res)
);
router.get("/people/:s_id/enrollments", (req, res) =>
  peopleController.getEnrollments(req, res)
);
router.post("/people/:s_id/enrollments", (req, res) =>
  peopleController.enroll(req, res)
);
router.put("/people/:s_id/enrollments/:id", (req, res) =>
  peopleController.updateEnrollment(req, res)
);
router.delete("/people/:s_id/enrollments/:id", (req, res) =>
  peopleController.unenroll(req, res)
);

export default router;
