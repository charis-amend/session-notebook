// BACKEND 
// UPDATE & DELETE

// UPDATE:
// --- PATCH => one entry in one collection
// --- PUT => replaces an entire collection
// mongoose method: findByIdAndUpdate()



// example joke from class...
// add another request method in [id].js:
if (request.method === "PATCH") {
    // get the data we want to update:
    const jokeData = request.body
    // find out which joke we want to update, and update it with the new jokeData from the submitted form
    const jokeToUpdate = await Joke.findByIdAndUpdate(id, jokeData)
    if (!jokeToUpdate) {
        return response.status(404).json({ status: "Couldnt update joke" })
    }
    response.status(200).json({ status: "Joke updated successfully" })
}
// to change only one review (see fish-shop):
// not use findByIdAndUpdate() 
// -> use findById and then $push() to change value in an array




// now update Joke Component handleEdit() function:
async function handleEdit(e) {
    e.preventDefault()
    // standard process for getting the changes which were submitted in the EditForm:
    const formData = new FormData(e.target)
    const newJokeData = Object.fromEntries(formData)

    // then fetch the id of the to be changed joke:
    const response = await fetch(`/api/jokes/${id}`,
        {
            method: "PUT",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(newJokeData)
        })

    // mutate() --> so the changes directly display on webpage (without refreshing):
    if (response.ok) {
        mutate();
    }

    // if user should be redirected, then no mutating:
    if (response.ok) {
        router.push("/jokes/") // e.g. user is redirected to main page of jokes
    }
}



// DELETE
// add in [id].js: 
// !!! always add the if condition for 404 and 200 !!!
if (response.method === "DELETE") {
    const deletedJoke = await Joke.findByIDAndDelete(id)
    if (!deletedJoke) {
        return response.status(404).json({ status: "not found" })
    }
    response.status(200).json({ status: "deleted joke successfully" })
}

// change in Joke Component:
async function handleDelete(e) {
    e.preventDefault() // always add preventDefault!

    //  fetch selected Joke with the id:
    const response = await fetch(`/api/jokes/${id}`,
        { method: "DELETE" }); // select delete method
    if (response.ok) {
        router.push("/") // push the user back to the main page of jokes
    }
}


// findByIdAndDelete the fish-product-id 
// and then we have the Id of the deleted product 
// refer to the comment-Id and delete the this specific comment
const products = await Product.findByIDAndDelete(id)
await Reviews.deleteOne({
    _id: { $in: products.reviews },
})
