// fetching data from external server

// 1. adding useState() for fetching data

// using any tool to make requests to an URL (postman, thunderclient, etc)
// 2. in thunderclient: insert url 
//    returns response after calling the URL
//    returns .json file 
//    returns an object 
// 3. use separate separate function startFetching() instead of directly fetch()

// 4. make useEffect around the startFetching() function 
// useEffect() is a delayedd function. waits for the startFetching to be executed and then executes whatever is provided after

// 5. switching to another joke/page
//    1. need to force the fetch function to run again but with the new id 
//     2. creating another useState() for the id of a joke so then switch between the ids of each joke
//    3. do onClick for next joke button 
//    4. putting "id" in the empty array at the end of the useEffect() so it only rerenders the startFetching function according to a new id!

// 6. adding an addEventListener to the button, then it would click the button first 1,3,5,7,9 times because of every rendering it adds on the pre exisiting ones
//      to prevent this: 
//      --> adding and then REMOVING the Eventlistener!!
//      --- other use case: clock ---
//      every second the pointer should move, if we dont have a clean up function, then after the next intervall it shows a second pointer, a third
//      and then even the pointers move in 0.5 seconds, then 0.25 seconds, etc.... 

// ---- example: ----
export default function Joke() {
    // need a state for the fetch() function:
    const [joke, setJoke] = useState();

    // need a state for the id of each joke and then change the state of the id to switch to the next joke:
    const [id, setId] = useState(0);

    // useEffect wrapping around the startFetching() 
    // so it doesnt render the side all the time constantly
    useEffect(() => {
        // fetching data (step 3.)
        async function startFetching() {
            const response = await fetch(`www.example-url.com/${id}`)
            const joke = await response.json() // converting json into string

            // updating the state to the new joke:
            setJoke(joke);
        }
        startFetching() // calling the fetch function 

        // THE DEPENDENCY ARRAY: 
    }, [id] // specifing how many times the callback-function inside of {} should be rendered
        // in this case: prevent negative side Effects
        // empty arraay = effect is only exectured once
    ) // useEffect() ends here! 

    // if there is no joke then render nothing!
    // if (!joke) {
    //     return null
    // }

    // addding another useEffect for the h2 heading
    useEffect(() => {
        document.getElementById('heading').textContent = 'some text'
        // implementing cleanup function: 
        return () => { console.log("clean up") }
    })

    // need to add and then REMOVE the button, so it doesnt click the button in every intervall again.
    // if so, button would be clicked 1,3,5,7,9,... times 
    useEffect(() => {
        function handleClick() {
            console.log("click")
        }
        document.querySelector("button").addEventListener("click", handleClick)
        return () => { button.removeEventListener("click", handleClick) }
    })

    return (
        <>
            <h1>{joke.joke || ''}</h1> {/* joke is object joke is property  object.propery */}
            <h2 id="heading"></h2>
            <button
                type="button"
                onClick={() => { setId(joke.nextId) }}> {/* creating onClick so switches to next joke */}
                next joke
            </button>
        </>
    )
} 