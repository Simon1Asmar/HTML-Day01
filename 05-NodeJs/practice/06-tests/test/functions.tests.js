import { double } from "../functions.js";

// Importing chai
import * as chai from "chai"
const assert = chai.assert;

// Test suite
describe("functions tests", ()=>{
  // Test
  it("double func test (4, double(2))", (done)=>{
    const result = 4;
    assert.strictEqual(result, double(2));
    done();
  })
  // Test
  it("double func test (3, double(2))", (done)=>{
    const result = 3;
    assert.strictEqual(result, double(2));
    done();
  })
  // Test
  it("double func test (4, double(\"2\"))", (done)=>{
    const result = 4;
    assert.strictEqual(result, double("2"));
    done();
  })
  // Test
  it("double func test (4.0), double(2)", (done)=>{
    const result = 4.0;
    assert.strictEqual(result, double(2));
    done();
  })
  // Test
  it("double func test (0), double(0)", (done)=>{
    const result = 0;
    assert.strictEqual(result, double(0));
    done();
  })
  // Test
  it("double func test (3, double(1.5))", (done)=>{
    const result = 3;
    assert.strictEqual(result, double(1.5));
    done();
  })
  // Test
  it("double func test (null, double(null))", (done)=>{
    const result = null;
    assert.strictEqual(result, double(null));
    done();
  })
  // Test
  it("double func test ({}, double({}))", (done)=>{
    const result = {};
    assert.strictEqual(result, double({}));
    done();
  })

})