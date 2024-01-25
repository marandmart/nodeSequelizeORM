import { Router } from "express";
import LevelController from "../controllers/LevelController";

const router = Router();

const levelController = new LevelController();

router.get("/levels/:id", (req, res) => levelController.getOne(req, res));
router.get("/levels", (req, res) => levelController.getAll(req, res));
router.post("/levels", (req, res) => levelController.addLevel(req, res));
router.put("/levels/:id", (req, res) => levelController.updateLevel(req, res));
router.delete("/levels/:id", (req, res) => levelController.remove(req, res));

export default router;
