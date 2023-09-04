import { Router } from "express";
import PeopleController from "../controllers/PeopleController.js";

const router = Router();

router.get("/people/:id", PeopleController.getPerson);
router.get("/people", PeopleController.getAll);

export default router;
