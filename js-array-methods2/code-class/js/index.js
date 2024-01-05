import { handleList, handleSingleValue, handleObject } from "./utils.js";

const studentNames = ["Lucille", "Gilbert", "Jennie", "Lydia", "Agnes"];

const students = [
  { name: "Lucille", age: 30, points: 26, happiness: 5 },
  { name: "Gilbert", age: 45, points: 0, happiness: 1 },
  { name: "jennie", age: 47, points: 39, happiness: 5 },
  { name: "Lydia", age: 29, points: 14, happiness: 2 },
  { name: "Agnes", age: 34, points: 39, happiness: 4 },
];

handleList(students, "Original Students");

/** ------ Array.prototype.includes()-----  */
// Boolean!
// determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// data type - array 
// inside array = [data content, eg student names see example above]

// checking if my array has the name Harry:
const studentNamesIncludesHarry = studentNames.includes("Harry");
handleSingleValue(studentNamesIncludesHarry, "studentNamesIncludesHarry");

const studentNamesIncludesJennie = studentNames.includes("Jennie")
handleSingleValue(studentNamesIncludesJennie, "studentNamesIncludesJennie")




/**  ----- Array.prototype.find() -----  */
// The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function.
// or returns the first element that matches the searched for element of the function.
// for this we need a callback function! () => 
// If no values satisfy the testing function, undefined is returned.

const personOverThirty = students.find((student) => student.age > 30);
handleObject(personOverThirty, "personOverThirty");

/** --------- findIndex -------------- */
// if we want to know at which position in the array the element is we use findIndex
// If you need the index of the found element in the array, use findIndex().
// returns the index
// if it shows -1 means not found
// with a callback function () =>

const indexOfStudentWith39Points = students.findIndex((student) => student.points === 39);
handleSingleValue(indexOfStudentWith39Points, 'indexOfStudentWith39Points');
// this returns 2 because there are 2 students who have 39 points


/** ------- Array.prototype.sort() ---------- */
// THE ARRAY ELEMENTS ALL HAVE TO BE THE SAME TYPE (NUMBER OR STRINGS) NOT MIXED!!
// to organize an array - descending or ascending
// 2 ways to use:
// 1:
// element => ()
// 2:
// callback function () => ()
// using different UTF codes eg UTF-16 code units values
// there are different codes like ASCII 

// to organize something we need 2 elements 
// element a and element b
// then doing math:
// depending on how to organize array: a-b or b-a 
// the computer compares the first 2 elements and then 2nd and 3rd element until all elements are swapped to theeir correct order

// example sorting numbers:
// ascending:
// const sortedByAge = students.sort((a, b) => a.age - b.age);
// descending: add .reverse() at the end
// const sortedByAge = students.sort((a, b) => a.age - b.age).reverse();
// handleList(sortedByAge, 'sortedByAge');

// example sorting names
// need the if condition! we have to do it ourselves
// users.sort(function (a, b) {

/* const sortedByName = students.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}) */
// The above code compares each name. If it's greater, it returns 1. If it's less, it returns -1. Otherwise, it returns 0. 

// but we have to make sure all the letters are sorted even if some are lowercase or uppercase
// we have to make all of them lowercase or uppercase 
// in this case we dont change the original array elements ;) just creating a new variable which does
const sortedByName = students.sort((a, b) => {
  const nameA = a.name.toLowerCase();
  const nameB = b.name.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
})

handleList(sortedByName, 'sortedByName');

/** ------- Array.prototype.slice() ------------ */

// creates a shadow copy of the array 
// can combine it with the other methods

const sortedByAge = students.slice().sort((a, b) => a.age - b.age);

handleList(students, 'Not Original Anymore');
handleList(sortedByAge, 'Not Sorted By Age Anymore');

/** ------- Array.prototype.some()  ------------- */

// doesnt change the array
// looks if one element stimmt überein
// need callback function

const anyStudentHasZeroPoints = students.some(
  (student) => student.points === 0
);
handleSingleValue(anyStudentHasZeroPoints, 'anyStudentHasZeroPoints');


/* ------ Array.prototype.every() -------------- */

// tests if all elements pass the test
// boolean
// returns true or false 
// callback function 

const everyStudentIsOlderThanThirty = students.every((student) => student.age > 30);
handleSingleValue(everyStudentIsOlderThanThirty, "everyStudentIsOlderThanThirty");
