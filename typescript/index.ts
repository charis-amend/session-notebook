// --- VARIABLES
let variableA: number = 123;
// created the variable A and defined what type it has (number)

// --- ARRAYS
// specify which typeof of the array has! (string in this case)
const arr: string[];
// need to specify the default value!
const arr: string[] = [];

// --- OBJECTS
type User = {
  name: string;
  id: number;
  // optional: email? with the "?"
  email?: string;
};
const user: User = {
  name: "charis",
  // id: 123 -> commented out gives an error!
  // needs to contain name AND THE ID!!
  // typescript needs all keys!
};
const user: User = {
  name: "charis",
  id: 123,
};

// --- INTERFACE
// interface and type are almost identical, BUT
// interfaces can be extended and add another item
// type cant!
// can have multiple interface declarations:
interface User {
  name: string;
  id: number;
}
interface User {
  email: "email";
}
