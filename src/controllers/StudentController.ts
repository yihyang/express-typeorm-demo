import { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Student } from "../entity/Student";

class StudentController {
  static listAllStudent = async(req: Request, res: Response) => {
    const studentRepository = getRepository(Student);
    const students = await studentRepository.find();
    res.send(students);
  }

  static getOneById = async(req: Request, res: Response) => {
    const studentRepository = getRepository(Student);
    let { id } = req.params;

    const student = await studentRepository.findOne(id);
    res.send(student);
  }

  static newStudent = async(req: Request, res: Response) => {
    res.status(200).send();
  }

  static updateStudent = async(req: Request, res: Response) => {
    res.status(200).send();
  }

  static deleteStudent = async(req: Request, res: Response) => {
    res.status(200).send();
  }
}

export default StudentController;
