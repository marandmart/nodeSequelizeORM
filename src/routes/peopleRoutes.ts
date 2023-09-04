import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";

const router = Router();

router.get("/people/:id", PeopleController.getPerson);
router.get("/people", PeopleController.getAll);
router.post("/people", PeopleController.addPerson);
router.put("/people/:id", PeopleController.updatePerson);
router.delete("/people/:id", PeopleController.removePerson);

export default router;
