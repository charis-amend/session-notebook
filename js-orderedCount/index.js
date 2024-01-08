const orderedCount = function (text) {

    // creating new array without duplicates
    const abracadabraaText = "abracadabraa"
    const newArray = [...new Set(abracadabraaText)]
    console.log(newArray)

    // map over the new array and replace every character of the new Array with its own array
    return newArray.map(function (character) {
        return [character, text.split(character).length - 1]
    })
}

orderedCount("abracadabraa")