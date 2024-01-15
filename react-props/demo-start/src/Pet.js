export default function Pet({ name, sound, emoji, onhandleAnimal, isHungry }) {
    console.log("props:", props)


    function feedMe() {
        if (isHungry) {
            return "Feed Me!"
        } else {
            return sound
        }
    }

    // we need the function to run only when we click! 
    // so we put it inside a callback function
    // onClick={() => function (parameters)}
    return (< div onClick={() => onhandleAnimal(name, sound)} className="animal" >

    // if condition for if animal has isHungry, then text Feed me shows
    // {isHungry ? "Feed me!" : sound}
    // or calling function feedMe above
        {feedMe()}
        < span role="img" aria-label={name}>
            {emoji}
        </span >
    </div >

    )
}