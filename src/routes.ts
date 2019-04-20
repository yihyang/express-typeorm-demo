import { Router } from "express";
import StudentController from "./controllers/StudentController";
import student from "./routes/student";

const routes = Router();

routes.use('/students', student)


export default routes;
