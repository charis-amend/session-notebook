# REACT GLOBAL STAGE

## nice tools

- reflux a bit much
- zustand is better

- wait until you use something like zustand
- but for now we only we use the stuff we have used so far, not using a tool

!!! create an illustration of the component tree, the passing props and local and global states !!!

## example class

## Prop Drilling

- passing props from the top level .js file down to every small component
- in \_app.js:
  - if you add "pageProps" it passes the prop to sub-component
    `<Component {...pageProps}>`

## structure

#### in \_app.js:

- we have the status of the animals [animals, setAnimals]
- do a state for inititalAnimals insteadd of animals
- only upddating the values of the selectted animal with .map()

  - handleAdd gets Id of an animal and adds count
  - then passes the new state with the animal clicked

  - with handleSubtract function:
    - prevents going beyond zero in the count with Math.max(0, 0 - 1 ) this console logs 0

```js
<GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
```

#### <Component />

- andd all the props are created inside <Component />:

  - animalCounts -> maps only the counts of each animal objects and then creates an arrray for that
  - countSum -> with reduce()
  - CountAverage
  - dragonCount -> only use last object in initialAnimals.
  - handleAdd, etc.

- in the HomePage.js file (in here its index.js):
  - in <CounterStats /> it is confusing to have `counterSum={counterSum}`
  - but stick to this layout!

#### naming handle, on"action"

- onSubtract and onClick happens in the specific file, where the function takes place
- in this case Counter.js
- CounterList.js and all Components above in the tree are only passing it down.
