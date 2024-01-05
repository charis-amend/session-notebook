# Array Methods 2 (Javascript)

## includes()

`const studentNamesIncludesHarry = studentNames.includes("Harry");`

- Boolean!
- determines whether an array includes a certain value among its entries
- then returning true or false as appropriate

## find()

`const personOverThirty = students.find((student) => student.age > 30);`

returns the first element that matches the searched for element of the function.

## findIndex

`const indexOfStudentWith39Points = students.findIndex((student) => student.points === 39);`

- if we want to know at which position in the array the element is
- if it shows -1 means not found

## sort()

- the computer compares the numbers in the array continuously until doesnt have to swap the elements anymore
- it starts with first and second element, if they need to be swapped, it swaps them
- then continuing to element 2 (which couldve been element 1) and element 3 usw...

### ascending NUMBERS:

`const sortedByAge = students.sort((a, b) => a.age - b.age);`

### descending NUMBERS:

`const sortedByAge = students.sort((a, b) => a.age - b.age).reverse();`

### STRINGS:

- need the if condition
- make it all the same lower or uppercase!!

```js
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
});
```

## slice()

`const sortedByAge = students.slice().sort((a, b) => a.age - b.age);`

versions:
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

- console.log(animals.slice(2));
  // Expected output: Array ["camel", "duck", "elephant"]
- console.log(animals.slice(2, 4));
  // Expected output: Array ["camel", "duck"]
- console.log(animals.slice(1, 5));
  // Expected output: Array ["bison", "camel", "duck", "elephant"]
- console.log(animals.slice(-2));
  // Expected output: Array ["duck", "elephant"]
- console.log(animals.slice(2, -1));
  // Expected output: Array ["camel", "duck"]
- console.log(animals.slice());
  // Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

## some()

```js
const anyStudentHasZeroPoints = students.some(
  (student) => student.points === 0
);
```

- tests whether at least one element in the array passes the test the function runs.
- It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];
// Checks whether an element is even
const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Expected output: true

## every()

`const everyStudentIsOlderThanThirty = students.every((student) => student.age > 30);`

The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
