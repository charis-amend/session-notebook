// react ---- custom hooks

import { useEffect } from "react";

// goal: using this useEffect and useState Hook in multiple places in the application. instead of copy/pasting,...
// ... we build a custom hook. 
// 1. first build the hook once
// 2. then above app() build the custom hook. or buildd it in a separate file and import it
// 3. copypaste useState and useEffect and delete/comment out in the App() function
// 4. create a key in the useLocalStorage custom hook function.

// -------- the custom hook: --------


// need a default Value which is a empty string for the default value before something is being entered in the input field
const useLocalStorageState = (key, defaultValue = "") => {
    // replace the exisiting parameter "name" with a customizable key
    const [state, setState] = useState(() => window.localStorage.getItem(key) || defaultValue);
    // c
    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [state])

    return [state, setState]
}



const App = () => {
    // saving the useState function so if window is refreshedd, it shows either the last entered name or just ""
    // const [name, setName] = useState(() => window.localStorage.getItem("name") || "");
    const handleChange = event => setName(event.target.value)
    const [name, setName] = useState("name")

    // if name is changed then save it to the localstorage:
    // useEffect(() => {
    //     // update whatever is written in "name" it updates the key name:
    //     window.localStorage.setItem("name", name)
    // }, [name]) // useEffect watches whenever name is being changed and then renders again

    return (
        <div className="App">
            <header className="header">
                <p>
                    {name ?
                        <strong>Hello {name}</strong> : "Please type your name"}
                </p>

                <input type="text" onChange={handleChange} />
            </header>
        </div>
    )
}

