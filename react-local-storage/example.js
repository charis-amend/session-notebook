// ------------- VANILAA JS EXAMPLE ----------------
const button = document.querySelector("#cookiebanner button")
const cookieBanner = document.querySelector("#cookiebanner")
const consent = localStorage.getItem("consent")

try {
    if (consent === "ok") {
        cookieBanner.style.display = "none";
    }

    button.addEventListener("click", () => {
        cookieBanner.style.display = "none";
        localStorage.setItem("consent", "ok")
    })

} catch (error) {
    console.log(error)
}
// saaving object in localStorage:
localStorage.setItem("person", JSON.stringify({ name: "klaus", age: 34 }))
// logs the object as a string:
'{ "name": "klaus", "age":34 }'
// change the stringified object into a object again:
const javaScriptObject = localStorage.getItem("person")
JSON.parse(javaScriptObject)
// returns: 
{ name: "klaus"; age: 34 }

// ------------- REACT EXAMPLE ----------------
// adding this, so then, even if we open/close the browser tab the newly created todos item 
// will still show up.
import useLocalStorageState from "use-local-storage-state"
export default function App() {
    const [todos, setTodos] = useLocalStorageState("todos", {
        defaultValue: [],
    })
}
// or with a default value:
import useLocalStorageState from "use-local-storage-state"
export default function App() {
    const [todos, setTodos] = useLocalStorageState("todos", {
        defaultValue: [
            {
                id: 9999,
                title: "default title",
                isChecked: true
            }
        ],
    })
}

function handleAddTodo(title) {
    setTodos([{
        id: uid(),
        title,
        isChecked: false,
    }, todos,
    ])
}