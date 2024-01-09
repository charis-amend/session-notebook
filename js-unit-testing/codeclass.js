// ------ Code in Class------

// 1. in package.json check for jest 
// look for "jest@--watch all" then it tst the doc
// 2. create separate file greet.test.js aand import function file.js to the test.js file

// 3. in the test.js file import the greet.js file with the function we want to test.
import { greet } from "./greet.js"

// 4. create test() function
test('returns "hello!" if function greet(hello) with the parameter/value Hello works', () => {
    const result = greet("charis")//name of the function we want to test with word "Charis"

    // 5. create an expect() function in the test() function
    // 6. create the function toBe(). This function is called a "matcher "
    expect(result).toBe("hello Charis!")
})

// ------- TDD -----------
// test driven development TDD = the test are driving the developemnt. 

// 1. writing a test for the feature-function
// 2. it fails - the feature is not there yet
// 3. then write the feature-function
// 4. then run test 
// 5. it should work (green)


test('testing with TDD. returns "hello!" if function in general sayHello works', () => {
    const result = greet()//name of the function we want to test

    // creating the future result of the feature-function we will create next:
    expect(result).toBe("hello!")
}
)

