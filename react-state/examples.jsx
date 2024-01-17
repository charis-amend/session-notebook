import "./styles.css";
import { useState } from "react";

export default function App() {
    return <>
        <Counter />
        <Counter />
    </>
}

function Counter() {
    const [counter, setCounter] = useState(0)
    console.log(counter);
    //  const stateArray = useState(0)
    //  const counter = stateArray[0]
    //  const setCounter = stateArray[1]

    // let counter = 0;
    // console.log('counter component executed');
    return <button onClick={() => {
        setCounter(counter + 1);
    }
    }
    >You have clicked this button {counter} times
    </button>;
}


// ------------------------

import { useState } from "react";
import "./styles.css";

export default function App() {
    return (
        <>
            <h1>Place your order</h1>
            <FoodOrder />
            <FoodOrder />
        </>
    );
}

function FoodOrder() {
    // const food = "?"; typeof = string
    const [food, setFood] = useState('?')
    // default value is "?"

    // const isVegan = true; typeof = boolean
    const [isVegan, setIsVegan] = useState(true)
    // defaultt value is that the food is vegan, so vegan=true

    return (
        <>
            <div>
                {/* selecting food with a button for each food type*/}
                {/* defining --> const [food, setFood] = useState('?')   */}
                <button onClick={() => {
                    // setFood() function to change the state of "food": (when onClick for this butotn)
                    setFood('🍔')
                }}>
                    <span role="img" aria-label="A hamburger">
                        {/* current state variable "food" */}
                        🍔
                    </span>
                </button>
                <button onClick={() => {
                    setFood('🍕')
                }}>
                    <span role="img" aria-label="A pizza">
                        🍕
                    </span>
                </button>
                <button onClick={() => {
                    setFood('🌮')
                }}>
                    <span role="img" aria-label="A taco">
                        🌮
                    </span>
                </button>
            </div>

            {/* changing vegan status of the selected food */}
            {/* defining --> const [isVegan, setIsVegan] = useState(true) */}
            <p>Selected food: {food}</p>
            <button onClick={() => { setIsVegan(!isVegan) }}>
                Make it vegan:
                {isVegan ? (
                    <span role="img" aria-label="Thumbs up">
                        👍
                    </span>
                ) : (
                    <span role="img" aria-label="Thumbs down">
                        👎
                    </span>
                )}
            </button>
        </>
    );
}
