import { Router } from "express";
import StudentController from "../controllers/StudentController";

const router = Router();

router.get("/", StudentController.listAllStudent);
router.get("/:id", StudentController.getOneById);
router.post("/", StudentController.newStudent);
router.put("/:id", StudentController.updateStudent);
router.delete("/:id", StudentController.deleteStudent)

export default router;
