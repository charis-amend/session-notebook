// how to do dynamic routing

// we can create a page without actually creating a page
// we can do static pages (hardcoded and a file)
// server-side/dynamic pages -> it only creates the page whenever the user clicks on it

// have a const movieData with a lot of movie-objects
// using the useRouter from next/router
import { useRouter } from "next/router"
// 

export default function CurrentMoviePage() {
    // checking what useRouter() returns:
    const router = useRouter()
    console.log(router);

    // "find the currentMovie in movies which has the slug of the selected movie. 
    // "and the slug of the selected movie (movie.slug) has to match the slug from the useRouter() function."
    // "The useRouter() function returns a key called query. and the query value is the slug"
    const currentMovie = movies.find((movie) => movie.slug === router.query.slug)

    // then if condition what to do if the currentMovie is not matching the query.slug
    if (!currentMovie) {
        return (
            <>
                <h1>This movie doesn't exist!</h1>
            </>
        )
    }
}


// in the Parent Component MOVIES:
// create a button with confirmation
// the button navigates the user to the aquaman movie page
// router.push() pushes the url(slug) in the browser, pushes a strinng after the actual domain's url
function MoviesParent() {
    return (
        <button
            onClick={() => {
                if (confirm("You wanna go the aquaman?")) {
                    router.push("/movies/aquaman")
                }
            }}>
            Go To Aquaman Page
        </button>
    )
}

// router.push("/movies/aquaman")
// this has to be equivalent to the folder structure, otherwise 404!