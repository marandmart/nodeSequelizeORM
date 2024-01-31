import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";
import EnrollmentController from "../controllers/EnrollmentController.js";

const router = Router();

const peopleController = new PeopleController();
const enrollmentController = new EnrollmentController();

router.get("/people", (req, res) => peopleController.getAll(req, res));
router.get("/people/all", (req, res) =>
  peopleController.getAllWithoutConstraints(req, res)
);
router.get("/people/:id", (req, res) => peopleController.getOneById(req, res));
router.post("/people", (req, res) => peopleController.addPerson(req, res));
router.put("/people/:id", (req, res) =>
  peopleController.updatePerson(req, res)
);
router.delete("/people/:id", (req, res) => peopleController.remove(req, res));
router.get("/people/:s_id/enrollments", (req, res) =>
  enrollmentController.getEnrollments(req, res)
);
router.get("/people/:s_id/enrollments/all", (req, res) =>
  enrollmentController.getEveryEnrollment(req, res)
);
router.get("/people/:s_id/enrollments/:id", (req, res) =>
  enrollmentController.getEnrollment(req, res)
);
router.post("/people/:s_id/enrollments", (req, res) =>
  enrollmentController.enroll(req, res)
);
router.put("/people/:s_id/enrollments/:id", (req, res) =>
  enrollmentController.updateEnrollment(req, res)
);
router.delete("/people/:s_id/enrollments/:id", (req, res) =>
  enrollmentController.remove(req, res)
);

export default router;
