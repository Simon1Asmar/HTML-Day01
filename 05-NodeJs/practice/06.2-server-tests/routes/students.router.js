import { Router, json } from "express";
import { readStudents, writeNewStudent } from "../api/students.api.js";

const router = Router();

// middleware
// take the body outside of the request and treat it as an object
router.use(json());
// app.use(express.json())

router
  .route("/")
  .get((req, res) => {
    const students = readStudents();
    res.end(JSON.stringify(students));
  })
  .post((req, res) => {
    // Take new student from req
    const newStudent = req.body; // this would always be an empty object if it werent for using router.use(json());

    // load all the students from db
    
    // add new student to json
    
    // save new student to disk using fs

    writeNewStudent(newStudent);

    res.end("POST students");
  });

export default router;
