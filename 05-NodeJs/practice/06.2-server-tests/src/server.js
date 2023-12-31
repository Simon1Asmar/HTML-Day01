import express from "express"
import studentsRouter from "../routes/students.router.js";

const server = express();

// Students
// GET = get all students from db
// POST = add student to db

// middleware
server.use("/students", studentsRouter)


const PORT = 2323;

server.listen(PORT, ()=>{
  console.log(`Server listening on port ${PORT}...`);
})