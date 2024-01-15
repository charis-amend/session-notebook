import React from "react";
import Pet from "../src/Pet.js";
import "./styles.css";

export default function App() {
  handleAnimal(animal) {
    console.log(`Hello ${name}, said ${sound}`)
  }

  return (
    // adding the Pet() function fom Pet.js:
    <div>
    // adding the function for each animal and getting different keys from each animal:
      <Pet sound="Meow" name="Cat" onhandleAnimal={handleAnimal} isHungry />
      <Pet sound="Woof" name="Dog" onhandleAnimal={handleAnimal} />
      <Pet sound="Squeak" name="Mouse" onhandleAnimal={handleAnimal} isHungry />

    </div>

  );
}
