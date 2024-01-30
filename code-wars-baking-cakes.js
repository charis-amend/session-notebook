// must return 2
cakes(
    // recipe: 
    { flour: 500, sugar: 200, eggs: 1 },
    // available ingredients: 
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });

// must return 0
cakes(
    // recipe: 
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    // available ingredients: 
    { sugar: 500, flour: 2000, milk: 2000 });

function cakes(recipe, available) {
    // create a new array called numbers 
    const numbers = []

    // iterating over the recipe (looping)
    // for every ingredient(key) in the first object={recipe} check the value of the same ingredient(key) in the second object {"available"} 
    for (let ingredient in recipe) {
        // if there is not the same ingredient in the {available}-object then return 0;
        if (!available[ingredient]) return 0;

        // if the key=ingredient is in both {recipe} and {available}... 
        // then divide the ingredient-value from {available} by the ingredient-value of {recipe}
        numbers.push(Math.floor(available[ingredient] / recipe[ingredient]))

        // after the iteration we choose the lowest number of the "numbers" array and return it. 
        return Math.min(...numbers)
    }
}








