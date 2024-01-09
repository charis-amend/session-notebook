// Good to know:
// ---- accessing APIs in the browser ----

//back in the day: xhml 
//now we have a better system

// in the browser console:
const battery = await navigator.getBattery()

// we call the function and it takes time to return the infos on the eg battery in this case
// so we need await!

const battery2 = navigator.getBattery()
// navigator is a object in the browser and it has a lot of properties and functions

// ------------------------------------------------------------------------

// example code class: random cards if press button 
// -> see the html doc in this folder

// looking for an API which can give you cards in the internet
// copy the URL and read documentation! in case i have to replace something


// importing a component eg button
import { Button } from "../components/button.js"
// will give suggestions in the {} brackets
const main = document.querySelector("main")
const play = Button("Play", handleGetCards)
const pause = Button("Pause")
main.append(play)
main.append(pause)

// editing function in button component file:
// onClick is the name of the function
// adding onClick as parameter and an AddEventListener
const Button = (text, onClick) => {
    const button = document.createElement("button")
    button.addEventListener("click", onClick)
};

// creating function handleGetCards to give 2 cards, when I click on AddEventListener
// making a request to the API Url so i can fetch the 2 cards from it 
// i need FETCH API!
function handleGetCards() {
    const response = fetch("adding a url in here")
    console.log(response)
}
// this only would log Promise Pending because it is not an async function!! and it would wait forever on the promise

// adding "async"
async function handleGetCards() {
    const response = fetch("adding a url in here")
    console.log(response)
}
// it shows status:___ in the browser console 

// ------- EXKURS: type of status ------
"httpstatusdogs.com"
// -------------------------------------

// just to be safe we add a try and catch in case an error occurs we have an error message:
async function handleGetCards() {
    try {
        const response = await fetch("https://www.adding-a-url-in-here.com")
        // turning the response into the json we imported from the internet API 
        // if the response is okay, then....
        if (response.ok) {

            // need "await" again! because we run another promised-based function 
            // .json() is a function 
            // turning the response into a readable json file
            const data = await response.json()

            console.log(data.cards)
            // instead of log data we want to display the images of the cards 
            const cards = data.cards // shortening so we can use only "cards"

            // creating variable with empty string to add the img url into it
            let cardSet = "";

            // looping through the array cards (we saw on API's original website the fetched data is an array with objects and objects = cards)
            cards.forEach(card => {
                // adding everytime an image for each card with innerHTML
                cardSet = cardSet + `<img src= ${card.image} alt="Card"/>`
            });
            console.log(cardSet);
            // overwriting the existing innerHTML with "cardSet" so it shows the <img> html
            cardsDisplay.innerHTML = cardSet
        }
        // incase something bad:
    } catch (error) {
        console.log(error)
    }
}
// now it gets the 2 new cards everytime the button is clicked.

// appending and running the function to show the cards:
// creating function to display the cards:
const cardsDisplay = function CardsDisplay();
// appending this to the DOM:
card.append("card")


