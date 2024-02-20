// JS Classes
// object oriented programming
// (in Java its all about classes)
// ------------------------------
super() // calls items from parent
super.makeSound() // calls functions from parent
// ------------------------------

const sven = new Person() // this Person class i have to create new
const now = new Date() // Date already exists
// so naming the Person class:
class Person {
}
// this already logs "sven"



class Person {
    // can only have here methods!
    // function is redundant therefore only talk()
    talk() {
        console.log("talking")
    }
}
console.log(sven.talk())
// logs "talking"
sven.talk()
// logs "talking"




// constructor() method to assign properties to the object: 
// constructor is automatically called when we instantiating the object.
class Person {
    constructor() {
        // assign properties to the "sven-object":
        this.name = "Sven"
        this.age = 45
    }
}
console.log(sven)
// logs Person {name: "Sven"}





// instantiating a class:
const charis = new Person("Charis", 29)
const marcell = new Person("Marcell", 38)
class Person {
    constructor() {
        // assign properties to the "sven-object":
        this.name = name
        this.age = age
    }
}
console.log(charis, marcell)
// logs 
// --- Person {name: "Charis", age: 29}
// --- Person {name: "Marcell", age: 38}





// Inheritance
class Car extends React.Component {
    render() { }
}
// "Car" inherits from "React.Component"

// example originally: 
class Bird {
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
    makeSound() {
        return this.sound
    }
    fly() {
        return "flying"
    }
}
class Cat {
    constructor(name, sound, numberOfLives) {
        this.name = name
        this.sound = sound
        this.numberOfLives = numberOfLives
    }
    makeSound() {
        return this.sound
    }
}



// example more efficient: 
// create a parent class "animals -> cat & bird === animals
// create a common parent class so its more efficient
// need "SUPER()" reference to the parent class
class Animal {
    // move all things that bird and cat have in common: 
    constructor(name, sound) {
        this.name = name
        this.sound = sound
    }
}
class Bird extends Animal {
    // removing constructor
    // removing makeSound()
    fly() { // only fly() is used in Bird
        return "flying"

    }
    constructor() {
        // referencing the rest of parent class
        super(name, sound)
    }
}
class Cat extends Animal {
    // removing name and sound in constructor 
    // removing makeSound()
    constructor(numberOfLives) {
        this.numberOfLives = numberOfLives
        // referencing the rest of parent class
        super(name, sound)
    }
}

const pete = new Bird("name of bird", "sound of bird")
console.log(pete)
// logs pete {name: "name of bird", sound: "sound of bird"}
const tomWrong = new Cat("name of cat", "sound of cat")
console.log(tomWrong)
// logs "numberOfLives -> undefined"
const tomCorrect = new Cat("name of cat", "sound of cat", 7)
// needs a value of numberOfLives
console.log(tomCorrect)
// logs tomCorrect { name: "name of cat", sound: "sound of cat", numberOfLives: 7}





// overriding the parent makeSound():
// in class Cat extends Animal {}
class Cat extends Animal {
    makeSound() {
        super.makeSound() // calling the makeSound from the parent:
        return "this is the cat sound"
    }
}



// static method:
// within... 
class Bird extends Animal {
    static fly() { console.log("flying") }
}
// and then call it like this:
Bird.fly() // can directly execute it