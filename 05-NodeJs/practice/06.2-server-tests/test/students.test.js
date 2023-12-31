import * as chai from "chai";
import { readStudents, writeNewStudent } from "../api/students.api.js";

const assert = chai.assert;

// Unit Test: specific unit of logic and test if it works or not
// tests if the readStudents() function is working
describe("Students tests suite", () => {
  it("unit test for read students fn", (done) => {
    const res = readStudents();
    assert.isArray(res);
    done();
  });
});

// Integration Test
// tests the entire flow of the endpoint is working correctly (server, syntax, router...)
describe("integration tests for students", () => {
  it("testing GET /students endpoint", async () => {
    const result = await fetch("http://localhost:2323/students").then((res) =>
      res.json()
    );
    // Assertions
    assert.isArray(result);
  });
  // OTHER WAY
  it("testing GET /students endpoint (way 2 using done)", (done) => {
    const result = fetch("http://localhost:2323/students")
      .then((res) => res.json())
      .then((res) => {
        // assertions
        assert.isArray(res);
        done();
      });
  });
});

// Post tests
describe.only("posts tests suite", () => {

  // before, beforeAll, after, afterEach

  // unit test
  it("writeNewStudent test", (done) => {
    // operation
    const studentsBeforeLength = readStudents().length; // for the 2nd assertion
    const newStudent = { name: "test" };
    const response = writeNewStudent(newStudent);
    const students = readStudents();

    // assertion
    // OPTIONS
    // check if res is true (NOT ENOUGH)
    assert.isTrue(response);
    // check the length of the array in db - shouble be + 1 (GOOD)
    const studentsAfterLength = students.length;
    assert.strictEqual(studentsAfterLength, studentsBeforeLength + 1);
    // Check if the new student object is inside the database (BEST)
    assert.deepInclude(students, newStudent);

    // edge cases


    done();
  });

  after(()=>{
    // delete obj { name: "test" } from db
  })

  // integration
});
