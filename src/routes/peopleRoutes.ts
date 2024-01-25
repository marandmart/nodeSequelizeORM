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
// router.get("/people/:s_id/enrollment/:enrollment_id", (req, res) =>
//   peopleController.getEnrollemnt(req, res)
// );
// router.post("/people/:s_id/enrollment", PeopleController.enroll);
// router.put(
//   "/people/:s_id/enrollment/:enrollment_id",
//   PeopleController.updateEnrollment
// );
// router.delete(
//   "/people/:s_id/enrollment/:enrollment_id",
//   PeopleController.unenroll
// );

export default router;
