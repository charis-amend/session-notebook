console.log(document);

// we can change the html via the DOM:
const form = document.querySelector('[data-js= "card-form"]')
// with querySelector gives us the nodes = the representation of the html
const input = document.querySelector('[data-js="text-input"]')
const cardContainer = document.querySelector('[data-js="card-container"]')

// adding a new card
// choose the semantic html!! no new names (in this case <li> for list item)
const newCard = document.createElement("li");

// now the newCard needs to be appended:
// document.body.append(newCard);

// now create the eventlistener to create the card when clicking on submit
form.addEventListener("submit", (event) => {
    event.preventDefault();

    // defining the variable and what it should do:
    const newCard = document.createElement("li");

    // take the classList for the newCard:
    newCard.classList.add();

    // defining the content of the card:
    // newCard.textContent = "this text will be displayed in the card";
    // now taking the input.value
    const cardInput = event.target.textInput.value;

    // create the content/design/specifics about the new created element(card)
    // .innerHTML turns everything written after into html element! need `` this!
    newCard.innerHTML = `
    <h2>Card</h2>`
        // the cardInput is dynamic and injects the input.value from the new created const cardInput.
        `<p>${cardInput}</p>
    `;


    // this adds the newCard to the DOM html: 
    // appending it to the card-container
    cardContainer.append(newCard);
    form.reset();
    // have to reset the form after adding the newCard!

})

// also possibility to add an eventlistener for a mousemove event
window.addEventListener("mousemove", event_a)
