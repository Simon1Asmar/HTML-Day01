import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const studentsFile = join(__dirname, "../data/students.json")

function readStudents(){
  try {
    // const students = readFileSync("./../data/students.json", "utf-8");
    const students = readFileSync(studentsFile, "utf-8");
    return JSON.parse(students);
    
  } catch (error) {
    console.log('error', error)
    return false
  }
}

function writeNewStudent(newStudent){
  try {
    // load all the students from db
    const students = readStudents();
    
    // add new student to json
    students.push(newStudent);

    writeFileSync(studentsFile, JSON.stringify(students, null, 2));
    return true;
  } catch (error) {
    console.log('error', error)
    return false;
  }
}

export {readStudents, writeNewStudent}