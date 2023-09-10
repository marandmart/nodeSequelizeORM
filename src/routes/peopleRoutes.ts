import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";

const router = Router();

router.get("/people/:id", PeopleController.getPerson);
router.get("/people", PeopleController.getAllPeople);
router.post("/people", PeopleController.addPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.removePerson);
router.get(
  "/people/:s_id/enrollment/:enrollment_id",
  PeopleController.getEnrollment
);
router.post("/people/:s_id/enrollment", PeopleController.enroll);
router.put(
  "/people/:s_id/enrollment/:enrollment_id",
  PeopleController.updateEnrollment
);
router.delete(
  "/people/:s_id/enrollment/:enrollment_id",
  PeopleController.unenroll
);

export default router;
