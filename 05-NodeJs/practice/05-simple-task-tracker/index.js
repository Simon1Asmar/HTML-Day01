// Setting up express aplication
const express = require("express");
const app = express();
const PORT = 8888;

// require fs module
const fs = require("fs");

// tasks object
let tasksData = {}
// Reads tasks data 
function readTasksData(){
  const tasksDataString = fs.readFileSync("./tasks.json", "utf-8");
  tasksData = JSON.parse(tasksDataString);
}

// middleware to parse JSON data from requests
app.use(express.json());

// middleware to handle the logic and pass it back to the server
app.use("*", (req, res, next)=>{

  // handle logic here

  // read tasks file to keep tasksData up to date
  readTasksData();
  

  next();
})

// GET: Retrieve a list of all tasks.
app.get("/tasks", (req, res)=>{
  // res.send("RETURN LIST OF ALL TASKS")
  res.send(tasksData.tasks);
})

//localhost:8888/tasks:5
// GET: Retrieve details of a specific task.
app.get("/tasks/:id", (req, res)=>{
  // Takes task id from params and parses it into an integer
  const taskId = parseInt(req.params.id);

  // Searches for task with the same id
  const task = tasksData.tasks.find((t) =>{
    return t.id === taskId;
  });

  // if task exists it returns it, else it returns error task not found
  if(task){
    // res.send(`RETURN TASK WITH ID = ${req.params.id}`, task)
    res.status(200).send(task);
  } else {
    res.status(404).send("ERROR 404: Task not found");
  }

})

// POST: Create a new task.
app.post("/tasks", (req, res)=>{
  
})

// PUT: Update an existing task.
app.put("/tasks", (req, res)=>{

})

// DELETE: Delete a task
app.delete("/tasks", (req, res)=>{

})

app.listen(PORT, ()=>{
  console.log(`Server is listening on port ${PORT}...`);
})