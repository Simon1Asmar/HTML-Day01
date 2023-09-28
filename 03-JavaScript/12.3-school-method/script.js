const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],
};

//returns person based on their type and ID
function findPerson(type, id){
  let person;

  type = type.trim().toLowerCase();

  if(type === "student"){
    person = school.students.find(student => student.id === id);
  } else if ("teacher"){
    person = school.teachers.find(teacher => teacher.id===id);
  } else {
    console.log(`"${type}" is not a valid input.`);
  }

  return person;
}

console.log(findPerson("student", 10));
console.log(findPerson("teacher", 1));

//assigns a student to the given subject
function assignStudent(studentID, subject){
  const teacher = school.teachers.find(teacher => {
    if(teacher.subjects.includes(subject) && teacher.capacityLeft > 0){
      teacher.students.push(findPerson("student", studentID));
      teacher.capacityLeft--;
      return true;
    } 
    // return teacher.subjects.includes(subject) && teacher.capacityLeft > 0;
  });

  if(teacher === undefined){

    console.log("Sorry, no available teachers left");
  }

}

assignStudent(10, "chemistry");

//assigns a new subject to a teacher if subject does not already exist in their array
function assignTeachersSubject(teacherID, newSubject){
  school.teachers.find(teacher => {
    if(teacher.id === teacherID && !teacher.subjects.includes(newSubject)){
      teacher.subjects.push(newSubject);
      return true;
    }
  })
}

assignTeachersSubject(1, "calculus");
assignTeachersSubject(1, "calculus");
assignTeachersSubject(1, "chemistry");

//Function to increase the student capacity of a teacher
function increaseTeachersCapacity(teacherID, amountToIncrease){
  const teacher = findPerson("teacher", teacherID);

  if(teacher){
    teacher.capacityLeft += amountToIncrease;
  } 
}

increaseTeachersCapacity(2,2);