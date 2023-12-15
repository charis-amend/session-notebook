console.clear();

const arr = [2, 4, 6, 8]
let sum = 0;

// 1
let length = arr.length
let counter = 0
// while (counter < length) {
//     sum = sum + arr[counter]
//     counter = counter + 1 
// }
// console.log("result:", sum)

// or easier: 
while (arr.length > 0) {
    sum = sum + arr.pop()
    // 20 = 20 + last deleted item in the array
}
console.log("result:", sum)
