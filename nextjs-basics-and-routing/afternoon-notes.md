# NEXT JS

- react framework with backend and frontend
- with multiple pages and multiple urls

### structure (=limitations)

- we need to follow this specific folder structure
- versions of nextjs
  - using app router
  - or
  - //using pages router// <--- using this one

## setup nextjs pages

1. npx create-next-app@latest
2. add project name
3. typescript - no
4. eslint - yes
5. tailwind css - no
6. src/directory - yes
7. app router - no
8. customize default import alias - no
9. code .
10. npm run dev -- look at browser default
    > in case i need to update node --> brew update node

## in the project

1. create about.js file
2. create a function Home() in about.js file
3. could delete api folder but dont delete \_app.js or \_document.js

#### create subpages:

- name the page for the Animals component "index.js" because we are only creating here the page, and not a component function.
- - inside a folder like **/src/pages/animals/** we have the **index.js** file with for the `function Animals() {}` which represents the page!!
- case sensitive ULR!!!!
  - if lion.jsx then "http://localhost:3000/animals/lion"
  - if Lion.jsx then "http://localhost:3000/animals/Lion"

1. **/pages/**
   1. **/animals/**
      1. index.js "http://localhost:3000/animals"
      2. elephant.js "http://localhost:3000/animals/elephant"
      3. **/lion/**
         1. index.js "http://localhost:3000/animals/lion"
         2. lionsubpage1 "http://localhost:3000/animals/lion/lionsubpage1"
         3. lionsubpage2 "http://localhost:3000/animals/lion/lionsubpage2"
2. about.js
3. index.js

- inside **/src/pages/animals/** we have the **elephant.js** file and `function Elephant() {}`. It has no subpages inside the Elephant-page so we don't need a folder.

# example project

1. create dataAnimals.json file

#### in the /animals/index.js file:

2. importing animals data from .json file
3. import head default
4. instead of `<a>` anker tag we should use the default `<Link>` component!!
5. next.js renders everything faster (pre-loading images), so it has a image component in the index.js main homepage there is a default `<Image>`
6. EXTRA SECURITY IMPORT

importing an image from the outside (src outside of api), have to tell NextJS that it is ok to allow this image

1. open next.config.js
2. then add the url of the domain of the images
3. reload the project in terminal control + c then npm run dev

```jsx
// @type { import('next').NextConfig }
// const nextConfig = {
//   reactStrictMode: true,
images: {
  domains: ["url"];
}
// };
// export default nextConfig;
```

```jsx
import Head from "next/head";
import dataAnimals from "/data/dataAnimals.json";

export default function Animals() {
  return (
    <>
      <Head>
        <title>Animals</title>
      </Head>
      <main>
        <h1>List of Animals</h1>
        <section className={styles.cardsSection}>
          {/* adding a key={} for REACT/NEXTJS to connect it with the 
           dataAnimals list and defining an ID/Key for a selected element */}
          {dataAnimals.map((animal, nameOfKey) => (
            <Link
              href={`/animals/${animal.name.toLowerCase()}`}
              key={nameOfKey}>
              <div className={styles.animalCard}>
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={100}
                  height={24}
                />
                <h1>{animal.name}</h1>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
```

#### in the /animals/lion.js file:

```jsx
import Head from "next/head";
import dataAnimals from "/data/dataAnimals.json";

export default function Lion() {
    // because lion is first element in array dataAnimals
    let animal = animals[0]
return (
    <>
      <Head>
        <title>Lion</title>
      </Head>
      <main>
        <h1>Lion</h1>
        <section>
            {dataAnimals.map((animal, nameOfKey) => <div key={nameOfKey}>)}
            <h1>{animal.name}</h1>
        </section>
      </main>
    </>
);
}

```
