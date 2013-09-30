// toBe-  should compare both types and values(but cannot compare arrays)
describe("the toBe Matcher", function() {
it("should compare both types and values", function() {
var actual = "123";
var expected = "123";
expect(actual).toBe(expected);
});
});

// toBe Matcher cannot compare arrays
describe("the toBe Matcher", function() {
it("should not be able to compare arrays", function() {
var actual = [1, 2, 3];
var expected = [1, 2, 3];
expect(actual).not.toBe(expected);
});
});

//toEqual- mechanism for handling equality( can compare arrays)
describe("the toEqual Matcher", function() {
it("should be able to compare arrays", function() {
var actual = [1, 2, 3];
var expected = [1, 2, 3];
expect(actual).toEqual(expected);
});
});

// -toBeDefined-  able to check defined objects
//toBeUndefined-  to check undefined objects

describe("the toBeDefined Matcher", function() {
it("should be able to check defined objects", function() {
var object = [1, 2, 3];
expect(object).toBeDefined();
});
});
describe("the toBeUndefined Matcher", function() {
it("should be able to check undefined objects", function() {
var object;
expect(object).toBeUndefined();
});
});

//toBeNull- if an object value is null

describe("the toBeNull Matcher", function() {
it("should be able to check if an object value is null",
function() {
var object = null;
expect(object).toBeNull();
});
});

//-toBeTruthy- if an object value is true
//-toBeFalsy- check if an object value is false


describe("the toBeTruthy Matcher", function() {
it("should be able to check if an object value is true",
function() {
	var object = true;
expect(object).toBeTruthy();
});
});
describe("the toBeFalsy Matcher", function() {
it("should be able to check if an object value is false",
function() {
var object = false;
expect(object).toBeFalsy();
});
});


//-toBeLessThan- perform the simple mathematical less-than
// toBeGreaterThan- used to perform the simple greater-than operations

describe("the toBeLessThan Matcher", function() {
it("should be able to perform the less than operation",
function() {
expect(4).toBeLessThan(5);
});
});
describe("the toBeGreaterThan Matcher", function() {
it("should be able to perform the greater than operation",
function() {
expect(5).toBeGreaterThan(4);
});
});

//toMatch- to match the value with a regular expression

describe("the toMatch Matcher", function() {
it("should be able to match the value with a regular expression",
function() {
expect(5).toMatch("[0-9]");
});
});