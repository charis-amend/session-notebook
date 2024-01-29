// ------------------ IMMUTABLE STATE ------------------

// --------- OBJECTS -------------

const initObj = { name: "Marcell", something: "else" }
const [obj, setObj] = useState(initObj)
// initObj is the default value that "obj" has in the beginning

const handleClick = () => {
    // changing the name from "Marcell" to "Alan"
    // not working methods:
    obj.name = "Alan"
    console.log(obj)
    setObj(obj);
    // didnt show the original name "Marcell", only changed the name in the console log. 
    // we cannot change an original object, we need to create a new object.

    // so this is how we can acutally display the changed name in the changed object:
    // currentObj => could also be "prevObj" called, is always the initObj of the useState()
    setObj((previousObj) => {
        return { ...previousObj, name: "Alan" }
    })

    // with a condition depending on which name came before: 
    // is "Alan" displayed ? then switch to "Marcell" : if not then stay "Alan"
    setObj((previousObj => {
        return { ...previousObj, name: prevObj.name === "Alan" ? "Marcell" : "Alan" }
    }))
}

// --------- ARRAYS -------------
// how to add an item (eg. todo) in the array after clicking a button
const initArray = ["todo 1", "todo 2", "todo 3"]
const [array, setArray] = useState(initArray)
const addList = (event) => {
    event.preventDefault();
    array.push(event.target.add.value)
    console.log(array); // doesn't add the new "todo 4" to the initArray, only console logging 
    // this is again not working. 

    // working correct method: 
    setArray((previousArray) => {
        return [...previousArray, event.target.add.value]
    })
}

// ----------- Example watched Seasons of a TV Show -----------
// need to change the icon "seen/notSeen", need to create a new array, we can't use the exisiting arraay-data

// an array with multiple objects. And each objects has two keys. 
// One key contains another array, which then has objects again.
const initialSeasons = [
    {
        season: 1,
        episodes:
            [{ episode: 1, hasSeen: true }, { episode: 2, hasSeen: false }]
    },
    {
        season: 2,
        episodes:
            [{ episode: 1, hasSeen: true }, { episode: 2, hasSeen: false }]
    }
]
const [seasons, setSeasons] = useState(initialSeasons)
function handleToggleHasSeen(seasonNumber, episodeNumber) {
    setSeasons((previousSeasons) => {
        // first mapping thru the seasons:
        return previousSeasons.map((season) => {
            if (season.number !== seasonNumber) {
                return season;
            }
            // need to map again, because inside the the seasons, there is another array with objects with the episodes
            return {
                ...season,
                episodes: season.epddisodes.map((episode) => {
                    if (episode.number !== episodeNumber) {
                        return episode;
                    }

                    return {
                        ...episode,
                        hasSeen: !episode.hasSeen
                    }
                })
            }
        }
        )
    })
}
// quicker method without doing mapping twice!
// inside of handleToggleHasSeen():
updateSeasons((change) => {
    const season = change.find(({ number }) => number === seasonNumber);

    const episode = season.episodes.find(
        ({ number }) => number === episodeNumber
    );

    episode.hasSeen = !episode.hasSeen;
});

