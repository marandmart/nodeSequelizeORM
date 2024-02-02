import { Router } from "express";
import ClassController from "../controllers/ClassController.js";

const classController = new ClassController();

const router = Router();

router.get("/classes/:id", (req, res) => classController.getOneById(req, res));
router.get("/classes", (req, res) => classController.getClasses(req, res));
router.post("/classes", (req, res) => classController.addClass(req, res));
router.put("/classes/:id", (req, res) => classController.updateClass(req, res));
router.delete("/classes/:id", (req, res) => classController.remove(req, res));

export default router;
