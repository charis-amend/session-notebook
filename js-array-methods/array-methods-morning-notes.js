const movies = ["matrix", "james bond", "ice age", "pulp fiction"];


/* ------------------ For-Each-Loop-Method: THIS IS THE SYNTAX -------------------- */

// we want to create a card for each movie 
// with only ONE command!
// creating Element -> append to DOM

// running the loop for each element "movie" and perform the callback function:
// !!! for-each loop doesnt do returns !!!

movies.forEach((movie) => {
    console.log("movie:", movie);

    // creating a headline for one element
    const headline = document.createElement("h1");
    // with dot notation movie.title
    headline.textContent = movie.title
    // with bracket notation [] if the key of the object is a string ("movie-title": "matrix")
    // headline.textContent = movies["movie-title"]
    // adding the headline to the DOM
    document.body.append(headline);

    // other items:
    const description = document.createElement("p");
    const image = document.createElement("img");
    const article = document.createElement("article");

    // description:
    description.textContent = movie.description;

    // image:
    image.setAttribute("src", movie.url);
    image.addEventListener("click", () => {
        // index returns the element 
        console.log("index test:", index)
    })
    // article:
    article.append(headline, description, image);
    document.body.append(article);

});

// the for-loop would be to complicated:
// !!! for-each loop doesnt do returns !!!
// for (let index = 0; i < movies.length; index = index + 2) {
//     const movie = movies[index];
//     const headline = document.createElement("h1");
//     headline.textContent = movie.title;
//     document.body.append(headline);
// }


/* ------------------ .MAP()-Method: THIS IS THE SYNTAX -------------------- */
// this is a callback function that defines the content of the 
// variable upperCaseTitles directly as the return of the function movies.map() => {}

const upperCaseTitles = movies.map((movie) => {
    return movie.title.toUpperCase();
});
console.log("upperCaseTitles:", upperCaseTitles);


// --------------other "number"-example to change the arrays content: ----------
// !!! forEach doesnt create a new array !!!
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
    doubledNumbers.push(number * 2);
});
// test it:
console.log("doubled Numbers:", doubledNumbers)
// logs: node index.js
// doubled numbers [2, 4, 6, 8, 10]

// can also make it straight forward and quicker with .map()
// if we have only one thing that we return (== implicit return) --> number *2 then we dont need {} after arrow function => 
const doubledMap = numbers.map((number) => number * 2);
// we dont need a return in this case -- compared to the example upperCaseTitles. uppderCaseTitles needs return statrmenet!

// ---- if we return multiple things we need => {}
// ---- if we return a condition (if-else-statement) we need => {}


/* ------------------ .FILTER()-Method: THIS IS THE SYNTAX -------------------- */

// inside the filter always use boolean (has to be true or false!)
const bestRankedMovies = movies.filter((movie) => {
    return movie.imdbRating > 8;
});

// this filters all the movies from the array that are ranked over 8 
// 
const bestRankedMoviesLongVersion = movies.filter((movie) => {
    if (movie.imdbRating > 8) {
        return true;
    } else {
        return false
    }
});

/* ---- startWith("") method ---*/

const testingLetter = "elefant"
testingLetter.startsWith("e");
console.log(testingLetter);
// logs true

testingLetter.startsWith("d");
console.log(testingLetter);
// logs false