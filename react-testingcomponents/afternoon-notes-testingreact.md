# Testing React Components

`npm install --save-dev @testing-library/react`

### types of testing

1. npm linting
2. unit testing // made for functions, only made for functionality, don't test workflow
3. integration test
4. end-to-end test // eg is the login page working (also create negative testing! create negative test case, with an error message)

--> create tests, run--> `npm run test`

#### code coverage test

- how many portions of my code are covered with tests
- in .jest documentation:
- will create a coverage folder
  `npm run jest-coverage `

# Example Liking and Deleting Movies Demo

1. with test()
2. render() function tests the Movie Component
3. we imported {screen} from react. it creates a virtual representation of our browser to test elements, it is an object that simulates the browser
4. using any example, in this case "The Matrix". But could also be "testitem", doesn't have to be a value from the own create data.

## in movie.test.js file:

```js
import Movie from ".";
import {render, screen} from '@testing-library/react'

test("renders a movie", () => {
    // rendering the Movie-component for the prop ({name})
    render(<Movie name="The Matrix" />)
    // get me an element where the text element is The Matrix, return value is hmtl
    const matrixHeading screen.getByTest("The Matrix")
    // defining what should be there
    expect(matrixHeading).toBeInTheDocument()
});

//  .getByRole Method:
const matrixHeading screen.getByRole("heading", {name: "The Matrix", level: 2})
//  querying for the headings in the document
// test should be very specific:
    getByRole('heading', { level: 2 })
    // gets this html:
    <h1>Heading Level One</h1>

    getAllByRole('heading', {level: 2})
    // gets this html:
    <h2>First Heading Level Two</h2>
    <div role="heading" aria-level="2">Second Heading Level Two</div>
```

**another test**

```js
test("renders a mneww movie when the form is submitted with a new movie name", async () => {
  // rendering the movies component:
  render(<Movies initialMovies={initialMovies} />);

  // get the testing elements:
  const user = userEvent.setup();
  const input = screen.getByLabelText("Name");

  // need an async function here, to wait until the user types something, not immediately run test, otherwise it will fail as soon as the application starts before someone has entered something
  // simulating user interaction:
  await user.type(input, "The Matrix");

  // same for a submit-button element:
  const button = screen.getByRole("button", { name: "Add" });
  await user.click(button);

    // check if the new added movie is showing up in the simulation test:
  const matrixHeading screen.getByRole("heading", {name: "The Matrix", level: 2})

  // need an expect()
  expect(matrixHeading).toBeInTheDocument();
});

```
