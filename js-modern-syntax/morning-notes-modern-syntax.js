// ------------- destructuring object -----------------------

const person = {
    name: "charis",
    age: 100,
    x = 10,
    address: {
        street: "ritterstr"
    }
}
// old way:
const name = person.name
const age = person.age

// an object has no order! 
// object === unordered!

// new way:
const { name, age } = person;

// adding an alias "personname"
const { name: personname, age, x = 7, { street: streetFromAdress } } = person
// logs x = 10 instead of x = 7 because the priority is the object and not the alias!

const { name, ...rest } = person
// collects the rest, x=rest



// ------------- destructuring array -----------------------

const animals = ["cat", "dog", "mouse"]

// const cat = animals[0]
// const dog = animals[1]
// replacing these 2:
const [cat, dog, mouse] = animals
console.log(mouse) // logs "mouse"
// or 
const [x, y] = animals
// we are not retrieving the elements, just the positions. Could use any word in there.
// the variable is created inside the []. we dont need an alias like above

const [, , mouse] = animals
console.log(mouse) // logs "mouse"

const [, , mouse = "jerry"] = animals
console.log(mouse) // logs "jerry"

const [cat, ...rest] = animals
console.log(rest) // logs everything after cat, ---> "dog", "mouse"


// ---------------- rest Syntax -------------

function sum(...restArguments) {
    console.log(restArguments) // logs an array [2, 5, 3, 4]
}
sum(2, 5, 3, 4)

// ---------------- spread Operator ------------
// similar to splice()
const numbers = [2, 4, 6, 8]

// making a copy:
// dont do const copy = numbers ----> will change both arrays!
const copy = [...numbers]
copy.push(10) // logs copy=[2, 4, 6, 8, 10] but const numbers stays the same!

// adding another array
const characters = ["a", "b", "c"]
const combined = [...numbers, ...characters]
console.logs(combined) // logs [2, 4, 6, 8, "a", "b", "c"]

// adding something inside the array:
const newNumber = 10
const allNumbers = [...numbers, newNumber]
console.log(allNumbers) // logs [2, 4, 6, 8, 10]

// changing a value of every key inside an object:
const persons = [{ name: "x", age: 100 }, { name: "y", age: 200 }]
persons.map(person => {
    return { ...person, age: 50 }
})
// logs: [{name: "x", age:50}, {name:"y", age: 50}]
// order is important! put ...parameter before the to be changed value


