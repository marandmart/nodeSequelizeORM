import { Router } from "express";
import LevelController from "../controllers/LevelController";

const router = Router();

router.get("/levels/:id", LevelController.getLevel);
router.get("/levels", LevelController.getAll);
router.post("/levels", LevelController.addLevel);
router.put("/levels/:id", LevelController.updateLevel);
router.delete("/levels/:id", LevelController.deleteLevel);

export default router;
