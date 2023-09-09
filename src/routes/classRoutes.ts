import { Router } from "express";
import ClassController from "../controllers/ClassController.js";

const router = Router();

router.get("/classes/:id", ClassController.getClass);
router.get("/classes", ClassController.getAll);
router.post("/classes", ClassController.addClass);
router.put("/classes/:id", ClassController.updateClass);
router.delete("/classes/:id", ClassController.deleteClass);

export default router;
