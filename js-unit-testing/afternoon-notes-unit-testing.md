# Unit Testing

### why

- check if everything i build before still works after i added a new/different feature
- existing code needs structure otherwise tests wont be efficient
- write documentation at the end! but next feature is just around the corner, doc is not always updated
- therefore well written tests to document what is happening in an application (dont necessarily need doc)
- writing tests simultaneously tests while codeing (takes longer, but efficient in the end)

## testing separately a test

1. check if all the tests are working
2. if there is a bug but all the tests are green
3.
4. then create a test specifically for the bug

## Types of Tests

1. end to end (very few tests!)
   - for example:
     - new entry in the data base
     - check if the new entry arrived from API
   - check communication between server and application
2. integration (moderate amount of tests!)
   - testing if unit1test and unit2test work with each other
3. unit (a lot of tests!!!)
   - for every function you have test, those tests test the input and output
   - !! we need different modules for each functions so testing units separately
4. static ( not a lot of tests!)
   - basic stuff like npm running in the background

## IMPORTANT

- test() expect() and .toBe() are all jest functions
- test driven development TDD = the test are driving the developemnt. you start with test and then create your function for the feature
- there are multiple versions of .toBe(), toBeUndefined(), etc.

# Test Driven Development ---- HOW:

1. writing a test for the feature-function
2. it fails - the feature is not there yet
3. then write the feature-function
4. then run test
5. it should work (green)
